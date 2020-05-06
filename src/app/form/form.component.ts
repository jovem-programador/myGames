import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as $ from 'jquery';

// Importar a classe do formulario

import { GameForm } from '../classes/game-form';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {

  // Declara campos do formulario
  gameForm: GameForm = new GameForm();

  // Armazena os nomes das plataformas
  platforms: Observable<any[]> = this.db.collection('platforms', (ref) => ref.orderBy('name')).valueChanges();

  // Obtém o Id da rota
  id: string = this.route.snapshot.paramMap.get('id');

  constructor(

    private db: AngularFirestore,

    // Roteamentos
    private route: ActivatedRoute,
    private router: Router

    ) { }

  ngOnInit(): void {

    // Se tem um Id, obter dados do Db
    if (this.id !== null) {

      // Atualizar campo Id do formulário
      this.gameForm.id = this.id;

      this.db.collection<any>('games').doc(this.id).ref.get().then(

        (doc) => {

          if (doc.exists) {

            // Atibui dados recebidos aos campos do formulário
            this.gameForm.id = doc.id;
            this.gameForm.title = doc.data().title;
            this.gameForm.cover = doc.data().cover;
            this.gameForm.description = doc.data().description;
            this.gameForm.platform = doc.data().platform;
            this.gameForm.media = doc.data().media;
            this.gameForm.date = doc.data().date;

          } else {

            // Feedback
            alert('Documento não encontrado!\nClique em [Ok] para continuar...');

            // Redireciona para a listagem
            this.router.navigate(['/list']);
          }
        }
      ).catch(

        // Mensagem de erro no console
        (error) => {
          console.error('Falha ao obter documento: ', error);
        }
      );
    }


    // Responsividade da ajuda (aside)
    $(document).ready(() => { // JQuery
      $(window).resize(() => {
        if (window.innerWidth > 539) {
          $('aside').show(0);
        } else {
          $('aside').hide(0);
        }
      });
    });
  }

// Método que processa o formulario

onSubmit() {
  //console.log(this.gameForm);

  // Se não identificou um id cadastre um novo jogo
  if (this.gameForm.id === undefined) {

    // Cadastre um novo jogo ({...}atalho para JSON Parse)

     this.db.collection<any>('games').add({...this.gameForm})

     // Criado com sucesso
     .then(() => {

      // Feedback que salvou novo documento
       alert(`Jogo "${this.gameForm.title}" adicionado com sucesso`);

       // Reseta o form
       this.gameForm = new GameForm();

       // Sai sem fazer nada
       return false;
     })
     .catch((err) => {
       // Exibe erro no console
       console.error('Erro ao gravar dados' + err);
     });
  } else {

    // Edite um jogo
          // console.log('Editando', this.gameForm);

          this.db.collection<any>('games').doc(this.id).set(

            // Obtém os dados do formulário e atribui ao documento do Firestore
            {
              title: this.gameForm.title,
              cover: this.gameForm.cover,
              description: this.gameForm.description,
              platform: this.gameForm.platform,
              media: this.gameForm.media,
              date: this.gameForm.date
            }
            // Se atualizou o documento
          ).then(
            () => {
              alert(`"${this.gameForm.title}" atualizado com sucesso!\n\nClique em [Ok] para continuar.`);

              // Listagem de jogos
              this.router.navigate(['/list']);
            }
          ).catch(

            // Exibe erro no console
            (error) => {
              console.error('Falha ao atualizar Db:', error);
            }
    );
  }

}

  // Oculta / exibe ajuda
  helpToggle() {
    $(document).ready(() => {

      if ($('aside').is(':visible')) {
        this.helpHide();
      } else {
        this.helpShow();
      }

    });
    return false;
  }

  // Oculta ajuda
  helpHide() {
    $('aside').slideUp('fast');
  }

  // Mostra ajuda
  helpShow() {
    $('aside').slideDown('fast');
  }

  hideAside() {
    if (window.innerWidth > 539) {
      return false;
    } else {
      this.helpHide();
    }
  }

}
