import { Component } from '@angular/core';

class Item {
    author: string;
    book: string;
    done: boolean;
    price: number;

    constructor(author: string, book:string, price: number) {

        this.author = author;
        this.book = book;
        this.price = price;
        this.done = false;
    }
}

class Author {
    author: string;


    constructor(author: string) {

        this.author = author;
    }
}
class Book {
    book: string;


    constructor(book: string) {

        this.book = book;
    }
}

@Component({
    selector: 'purchase-app',
    template: `<div class="page-header">
        <h1> Список покупок </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="author" placeholder = "Автор" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="book" placeholder = "Книга" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(author, book, price)">Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Автор</th>
                    <th>Книга</th>
                    <th>Цена</th>
                    <th>Куплено</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.author}}</td>
                    <td>{{item.book}}</td>
                    <td>{{item.price}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done" /></td>
                </tr>
            </tbody>
        </table>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Автор</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let item of items">
                <td>{{item.author}}</td>
            </tr>
            </tbody>
        </table>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Книга</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let item of items">
                <td>{{item.book}}</td>
            </tr>
            </tbody>
        </table>
    </div>
    
    `
})
export class AppComponent {
    items: Item[] =
        [
            { author: "Стівен Кінг", book:"Малятко", done: false, price: 236 },
            { author: "Даша Донцова", book:"Вітязь", done: false, price: 69 },

        ];
    authors: Author[];
    books: Book[];
    price: any;
    author: any;
    book: any;
    addItem(author: string, book:string, price: number): void {

        if (author == null || author.trim() == "" || price == null)
            return;
        this.items.push(new Item(author,book, price));
        this.authors.push(new Author(author));
        this.books.push(new Book(book));
    }
}
