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




