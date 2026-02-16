Lezione di lunedì 16 febbraio 2026:

Piccolo task:

- creare nuovo progetto Angular (ng new MaterialApp2 --directory ./)
- installare Angular Material  (ng add @angular/material)
- aggiungere la schematics navigation dentro un componente chiamato "main"
  https://material.angular.dev/guide/schematics -  Navigation schematic 

  il commando è: ng generate @angular/material:navigation <component-name>
  quindi ho eseguito il commando:  ng generate @angular/material:navigation /components/main    

-  nell'app.html, ho cancellato tutto e ho scritto per vedere com'è impostata la pagina
<app-main></app-main>
ATTENZIONE: Controllare che MainComponent sia importata su app.ts se non lo ha fatto in automatico

- su main.component.ts, ho svuotato la classe MainComponent

- poi su main.component.html ho cancellato alcune proprietà che non mi servivano. 
  Eliminado alcune proprietà cambia l'effetto della pagina e in questo caso l'effetto è migliore rispetto quello di default.

- su main.component.ts, ho eliminato AsyncPipe da @components

- su main.component.html, ho messo <router-outlet></router-outlet> e automaticamente RouterOutlet  è stato importato su main.component.ts.


TASK: 
Creare 3 componenti: page 1, page 2 e page 3. Grazie a RouterOutlet devono essere navigabili dalla barra laterale.
Testare altre schematics come la transform.

- Ho creato i componenti page1, page2 e page3 usando il comando: ng generate component pages/page1, ng generate component pages/page2, ng generate component pages/page3.

- Su main.component.html, ho aggiunto 3 link alla barra laterale per navigare tra le pagine. 
  Ho usato il comando: <a mat-list-item routerLink="/page1">Page 1</a> e così via per page2 e page3.

- Infine, ho aggiunto le rotte per page1, page2 e page3 su app-routing.module.ts. 

- Su main.component.ts ho importato RouterOutlet e RouterLink, e li ho aggiunti alla sezione imports.

PROBLEMA pagina home - Copilot:  https://copilot.microsoft.com/shares/QWVda4GYRisrKycYFVJQi

RICORDA:

 routerLink è una direttiva che permette di navigare tra le pagine senza ricaricare l'intera pagina, mentre RouterOutlet è una direttiva che funge da segnaposto per il contenuto delle pagine che vengono caricate dinamicamente in base alla rotta selezionata.
 La differenza principale è che routerLink viene utilizzato per creare i link di navigazione, mentre RouterOutlet viene utilizzato per visualizzare il contenuto delle pagine in base alla rotta selezionata.

 Perché è importante usare routerLink invece di href? Perché routerLink permette di navigare tra le pagine senza ricaricare l'intera pagina, mentre href provoca un ricaricamento completo della pagina, il che può essere meno efficiente e meno fluido per l'utente. 
 Inoltre, routerLink è integrato con il sistema di routing di Angular, consentendo una gestione più semplice delle rotte e dei parametri.

 Perché è importante usare RouterOutlet? Perché RouterOutlet funge da segnaposto per il contenuto delle pagine che vengono caricate dinamicamente in base alla rotta selezionata. Senza RouterOutlet, non sarebbe possibile visualizzare il contenuto delle pagine in modo dinamico, e l'applicazione non sarebbe in grado di gestire le rotte in modo efficace.