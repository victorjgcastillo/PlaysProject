1. crear un componente shared/component/memo
2. Declarar un  @Input() con un array con un objeto card en TS memo
3. declarar el array con todos los objetos en el TS app.component
4. dibujar la carta en el HTML de memo.components con un *ngFor y *ngIF (para poder darle vuelta a la carta)
5. en el HTML de componentes declaramos: <app-memo [cards]="planets"></app-memo> para que se pinte
6. se delcara el OnInit en memo.components para que  cuando se inicialice el componente se barajeen las cartas