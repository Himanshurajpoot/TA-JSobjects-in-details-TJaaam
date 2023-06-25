class Booklist{
    constructor(root, list=[]){
      this.root=root
      this.books=list
    }

    add(title,author,numaber){
        let book = new Book(title,author,numaber)
        console.log(book)
        this.books.push(book)
        this.createUi()
        return this.books.length
    }

    hendleDelete(id){
        console.log(this)
      let index = this.books.findIndex(book =>book.id===id)
      this.books.splice(index,1)
      this.createUi()
      return this.books.length
    }

    createUi(){
        console.log(this.root)
        this.root.innerHTML=""

        this.books.forEach(book=>{
            let ui = book.createUi()
           
            ui.querySelector("span").addEventListener("click", this.hendleDelete.bind(this ,  book.id))
            this.root.append(ui)
        })
    }


}

class Book{
    constructor(title,author,numaber){
        this.title=title
        this.author=author
        this.numaber=numaber
        this.id =`id-${Date.now()}`
    }


    
    createUi(){
        let  tr  = document.createElement("tr");
           tr.classList.add("creatrUiTr")
        let titleTd = document.createElement("td");
        titleTd.innerText=this.title;
        let authorTd = document.createElement("td");
        authorTd.innerText=this.author;
        let isbnTd=document.createElement("td");
        isbnTd.innerText=this.numaber
        let span = document.createElement("span")
        span.innerText= "❌"
        tr.append(titleTd,authorTd,isbnTd,span)
        return tr
    }
}
let form = document.querySelector(".form")
let myBook = new Booklist(document.querySelector(".Books"))
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let title = document.querySelector(".title");
   let author = document.querySelector(".author");
   let number = document.querySelector(".number");
   myBook.add(title.value, author.value, number.value);
  
   title.value=""
   author.value=""
   number.value=""
})