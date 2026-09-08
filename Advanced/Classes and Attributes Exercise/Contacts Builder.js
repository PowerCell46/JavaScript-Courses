function solve() {

    class Contact {
        constructor(firstName, lastName, phone, email) {
            this.firstName = firstName,
                this.lastName = lastName,
                this.phone = phone,
                this.email = email,
                this._online = false
        }
    
        render(id) {
            const html = this._online === false ? `<article> <div class="title">${this.firstName} ${this.lastName}<button onclick="toggleFunc(this)">&#8505;</button> </div>
            <div class="info" style="display: none;">
            <span>&phone; ${this.phone}</span>
            <span>&#9993; ${this.email}</span>
            </div>
            </article>` : `<article> <div class="title online">${this.firstName} ${this.lastName}<button onclick="toggleFunc(this)">&#8505;</button> </div>
            <div class="info" style="display: none;">
            <span>&phone; ${this.phone}</span>
            <span>&#9993; ${this.email}</span>
            </div>
            </article>`;
    
           const parentElement = document.getElementById(id);
           parentElement.innerHTML += html
        }

        get online() {
            return this._online
        }
        
        set online(value) {
            this._online = value;
            const articles = document.getElementsByTagName("article");
            for (let article of articles) {
                if (`${this.firstName} ${this.lastName}` === Array.from(article.querySelector("div").textContent).splice(0, article.querySelector("div").textContent.length - 2).join("")) {
                    if (this._online) {
                        article.querySelector("div").classList.add("online");

                    } else {
                        if (article.querySelector("div").classList.contains("online")) {
                            article.querySelector("div").classList.remove("online");
                        }
                    }
                }
            } 
        }
    }
    
    // let contacts = [
    //     new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    //     new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    //     new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
    //    ];
    //    contacts.forEach(c => c.render('main'));
    //    setTimeout(() => contacts[3].online = true, 2000);
}

function toggleFunc(button) {
    if (button.parentNode.parentNode.querySelectorAll("div")[1].style.display === "none") {
        button.parentNode.parentNode.querySelectorAll("div")[1].style.display = "block";
    } else {
        button.parentNode.parentNode.querySelectorAll("div")[1].style.display = "none"
    }
}
