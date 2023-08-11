const QuoteBtn = document.getElementById("new-quote")
const quoteText = document.getElementById("quote")
const quteAuthor = document.querySelector(".quote-author")

QuoteBtn.addEventListener("click", (e) => {
  console.log(e.target)
  fetch(`https://api.quotable.io/random`)
    .then((res) => res.json())
    .then((data) => {
      let apiText = data.content
      quoteText.innerText = apiText
      let aptAuthor = data.author
      quteAuthor.innerText = aptAuthor
    })
})
