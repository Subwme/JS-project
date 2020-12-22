'use strict';

/**
 * Функция конструктор 
 * @param {string} author 
 * @param {string} text 
 * @param {date} date 
 */

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
//метод Post`a
Post.prototype.edit = function(text) {
    this.text = text;
}

const post1 = new Post('User', 'some text', new Date());
console.log(post1);
post1.edit('some text');
console.log(post1);


function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

const attached1 = new AttachedPost('User1', 'some text1', new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit('some text1');
console.log(attached1);


//ssugar
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

const post1 = new Post('User', 'some text', new Date());
console.log(post1);
post1.edit('some text');
console.log(post1);


class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const attached1 = new AttachedPost('User1', 'some text1', new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit('some text1');
console.log(attached1);