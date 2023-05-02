const feedDisplay = document.getElementById('feed')


fetch('http://localhost:8000/results')
    .then(res => res.json())
        .then(data => {
            data.forEach(article => {
                const title = `<div><h3>` + article.title + `</h3><p>` + article.url + `</p></div>`
                feedDisplay.insertAdjacentHTML("beforeend", title)

            });
        })
        .catch(err => console.log(err))