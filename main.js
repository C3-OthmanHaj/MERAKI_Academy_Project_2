const body = $("body")

// you should invok the books 
// How ?
// use for each 
// or plane B ==> use div for every single one
// const bookContainer = $(".books")





// const books = [
//     {
//         img : "./imgs/book1",
//         name: "The Full Stack Developer",
//         author: "Chris Northwood",
//         year: 2018,
//         description:  "Understand the technical foundations, as well as the non-programming skills needed to be a successful full stack web developer. This book reveals the reasons why a truly successful full stack developer does more than write code. You will learn the principles of the topics needed to help a developer new to agile or full stack working―UX, project management, QA, product management, and more― all from the point of view of a developer.",
//     },
//     {
//         img : "./imgs/book2.jpg" ,
//         name :	"JavaScript: The Good Parts" ,
//         author : "Douglas Crockford" ,
//         year :  2008 ,
//         description : "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that’s more reliable, readable, and maintainable than the language as a whole-a subset you can use to create truly extensible and efficient code."
//     },
//     {
//         img : "./imgs/book3.jpg" ,
//         name : "The crisis" ,
//         author : "Winston Churchill" ,
//         year : 1901 ,
//         description : "The Crisis is an historical novel published in 1901 by the American novelist Winston Churchill.[1] It was the best-selling book in the United States in 1901. The novel is set in the years leading up to the first battles of the American Civil War, mostly in the divided state of Missouri. It follows the fortunes of young Stephen Brice, a man with Union and abolitionist sympathies, and his involvement with a Southern family." ,
//     },
//     {
//         img : "./imgs/book4.jpg" , 
//         name : "The Fault in Our Stars" ,
//         author :"John Green" ,
//         year : 2012  ,
//         description :"The Fault in Our Stars is a novel by John Green. It is his fourth solo novel, and sixth novel overall. It was published on January 10, 2012. The title is inspired by Act 1, Scene 2 of Shakespeare's play Julius Caesar, in which the nobleman Cassius says to Brutus: The fault, dear Brutus, is not in our stars, But in ourselves, that we are underlings. The story is narrated by Hazel Grace Lancaster, a 16-year-old girl with thyroid cancer that has affected her lungs. Hazel is forced by her parents to attend a support group where she subsequently meets and falls in love with 17-year-old Augustus Waters, an ex-basketball player and amputee." ,
//     },
//     {
//         img : "./imgs/book5.jpg",
//         name : "The Da Vinci Code" ,
//         author :"Dan Brown" ,
//         year : 2003 ,
//         description :"While in Paris on business, Harvard symbologist Robert Langdon receives an urgent late-night phone call: the elderly curator of the Louvre has been murdered inside the museum. Near the body, police have found a baffling cipher. Solving the enigmatic riddle, Langdon is stunned to discover it leads to a trail of clues hidden in the works of da Vinci…clues visible for all to see…and yet ingeniously disguised by the painter." ,
//     },
//     {
//         img : "./imgs/book6.jpg" ,
//         name : "Stephen King's Danse Macabre" ,
//         author :"Stephen King" ,
//         year :  1985,
//         description :"From the Flap In his most unusual bestseller, the man who knows better than anyone else in the world what scares us and why, takes us on his personal--and terrifying--tour of the dark ballroom of Horror itself." ,
//     },
//     {
//         img : "./imgs/book7.jpg" ,
//         name : "Misery",
//         author :"Stephen King",
//         year : 1987 ,
//         description :"Misery is an American psychological horror thriller novel written by Stephen King and first published by Viking Press on June 8, 1987.[1] The novel's narrative is based on the relationship of its two main characters – the romance novelist Paul Sheldon and his deranged fan Annie Wilkes. When Paul is seriously injured following a car accident, former nurse Annie brings him to her home, where Paul receives treatment and doses of pain medication. Paul realizes that he is a prisoner and is forced to indulge his captor's whims.",
//     },
//     {
//         img : "./imgs/book8.jpg" ,
//         name : "Rich Dad Poor Dad" ,
//         author :"Robert T. Kiyosaki" , 
//         year :  2000 ,
//         description :"Rich Dad Poor Dad is a 1997 book written by Robert Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy (financial education), financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence (financial IQ)." ,
//     },
//     {
//         img : "./imgs/book9.jpg" ,
//         name : "The 48 Laws of Power" ,
//         author :"Robert Greene" ,
//         year : 1998 ,
//         description :"Greene initially formulated some of the ideas in The 48 Laws of Power while working as a writer in Hollywood and concluding that today's power elite shared similar traits with powerful figures throughout history.In 1995, Greene worked as a writer at Fabrica, an art and media school, and met a book packager named Joost Elffers. Greene pitched a book about power to Elffers and six months later, Elffers requested that Greene write a treatment.",
//     },
//     {
//         img : "./imgs/book10.jpg" ,
//         name : "Arsène Lupin",
//         author :"Maurice LeBlanc",
//         year :  1908 ,
//         description :"regretted it - but he had indeed just received his instructions, and, very touched by a choice of which he felt all the honor, he intended to vigorously defend the rights of his client. So he opened the newly created file and, bluntly, exhibited the commander's letter. It proved the assignment of the note but did not mention the name of the purchaser. My dear friend .. she said simply.My dear friend, it is me, added Arsène Lupine in a note attached to the letter from the commander. And the best proof is that I have the letter." ,
//     },
//     {
//         img : "./imgs/book11.jpg" ,
//         name : "The Secret",
//         author :"Rhonda Byrne",
//         year : 2006 ,
//         description :"In this book, you’ll learn how to use The Secret in every aspect of your life—money, health, relationships, happiness, and in every interaction you have in the world. You’ll begin to understa",
//     },
//     {
//         img : "./imgs/book12,jpg" ,
//         name : "Harry Potter " ,
//         author :"J.K. Rowling",
//         year :  2012 ,
//         description :" The arrival of the Knight Bus signals the start of another extraordinary Hogwarts year for Harry Potter. Sirius Black, escaped mass-murderer, is on the run - and apparently he's after Harry. Meanwhile, Professor Trelawney sees a death omen in Harry's tea leaves. But perhaps most terrifying of all are the Dementors patrolling Hogwarts' grounds...",
//     },
//     {
//         img : "./imgs/book13.jpg" ,
//         name : "The Time Machine",
//         author :"Herbert George Wells",
//         year : 1895 ,
//         description :"The Time Machine is a science fiction novella by H. G. Wells, published in 1895 and written as a frame narrative. The work is generally credited with the popularization of the concept of time travel by using a vehicle or device to travel purposely and selectively forward or backward through time. The term time machine, coined by Wells, is now almost universally used to refer to such a vehicle or device.",
//     },
//     {
//         img : "./imgs/book14.jpg" ,
//         name : "A Funny Man's Dream", 
//         author :"Fyodor Dostoyevsky",
//         year : 2000 ,
//         description :"Dostoyevsky is intimately linked with his heroes. It is his blood that courses through their veins, and his heart that beats in all of them. Dostoyevsky brings forth his characters in anguish, with throbbing pulse and breath that is gasping and labored. He commits the crimes his heroes commit, lives their titanically turbulent lives, repents with them, and is with them in his thoughts, which shake heaven and earth. Because of his urge to go through more and more experience with them with such terrible concreteness, we are shaken by him as by no one else.",
//     },
//     {
//         name : "King of Light",
//         author :"Young-Rock Lee", 
//         year :  2011 ,
//         description :"from back of book in original language (Korean): From now on, we must look at Scripture again. Scripture is food of the spirit. Now; we must look in the spirit the Word which we've thus far seen in the flesh. We must see the Word in the spirit so that the inside of man's spirit can change into God's world, which is the spirit. By the Word, the Holy Spirit reforms and changes our spirits, opens our spiritual eyes so that we can correctly see God's truth, and allows us to meet God's deep place of love. This text is a complete text that spiritually opens the deep secrets of Jesus and the cross. Through this book, one can see with spiritual eyes God's astonishing plan and will. And it is certain that by the Word, we can meet the second coming, which is our hope. If I lay myself down and open the eyes of my spirit, I can meet God.",
//     },
//     {
//         name : "Diary of a Wimpy Kid" ,
//         author : "Tskim515" ,
//         year : 2014 ,
//         description : "The launch of an exciting and innovatively illustrated new series narrated by an unforgettable kid every family can relate to It’s a new school year, and Greg Heffley finds himself thrust into middle school, where undersized weaklings share the hallways with kids who are taller, meaner, and already shaving. The hazards of growing up before you’re ready are uniquely revealed through words and drawings as Greg records them in his diary."
//     }

// ];

//you need to put div=>all books in *div books1*
//try use .css to make it easy 
//try prependTo() or append


const read = () => {
            
$.each(books, (element , value) =>{
$(".books1").append("<div class='book-card'>" +value.name+ value.author+ value.year+ value.description+ "</div>")

// console.log(name);
})
// console.log(element.author);
}
read();
// const bbb = $(".books1")
//      books.forEach(function (element) {
//      bbb.text(element.name)
//     }) 
// }

// need to loop for *imgs* 
// make array and put img src in it
// use foreach or map to show it


























