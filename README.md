# ApiProject

## Install Angular CLI

To install the Angular CLI run the command `npm install -g @angular/cli`.

## Start the Application

Run `ng serve` to start the Application. Navigate to `http://localhost:4200/`. To Display the Application.

## Process of the Application

The Api's get with the HTTPClient Module called in the `loading-service.service.ts` file.

## Projekt Beschreibung

Beim Api Projekt wird mittels Angular zwei APIs verwendet, die aktuelle Busdaten anzeigen und den Status von Ladestationen für Elektroautos.

## Service

Der `loading-service.service.ts` wird verwendet für den Aufruf der APIs. Mit den Methoden `getBusData` und `getTrainData` werden die Busdaten von Waldegg Birmensdorferstrasse und die Busdaten vom Winterthur Hauptbahnhof ausgegeben.
Mit der Methode `getStationData` werden Daten von Ladestationen von den Koordinaten `x: 2600000` und `y: 1200000`.

## Component TS

Im App Component werden die aufgerufenen APIs verwendet. In der Methode `NgOnInit` werden die Daten bei der Initialisierung der Komponente geladen.
Mit dem Subscribe kann auf veränderungen der Daten reagiert werden und die Daten können so angepasst werden.
Die Methode `refreshPage` wird verwendet für das erneute Laden der HTML seite.

## Component HTML

In drei HTML-Tabellen werden die JSON Daten dargestellt. Mit der Punktannotation in Angular kann auf das JSON-Objekt zugegriffen werden.
Die Daten können mit geschweiften Klammern `{{objekt.name}}` in der HTML komponente dargestellt werden.
Der Refresh Button kann gedrückt werden, um die Seite neu zu laden, wenn veraltete Daten angezeigt werden.

## Component SCSS
Die SCSS Komponente wird für das Styling der Tabellen und des Buttons verwendet.




