const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("./server");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Books API", () => {

    it("should POST a book", (done) => {
        const book = { id: "1", title: "Harry Potter and the Philosopher's stone", author: "J.K Rowling" };

        chai.request(server)
            .post("/books")
            .send(book)
            .end((err, res) => {
                if (err)
                    return done();

                expect(res).to.have.status(201);
                expect(res.body).to.be.a("object");
                expect(res.body).to.have.property("id");
                expect(res.body).to.have.property("title");
                expect(res.body).to.have.property("author");
                done();
            });
    });
    it("should GET all books", (done) => {
        chai.request(server)
            .get("/books")
            .end((err, res) => {
                if (err)
                    return done();

                expect(res).to.have.status(200);
                expect(res.body).to.be.a("array");
                done();
            });
    });
    it("should GET a single book", (done) => {
        const bookId = 1;

        chai.request(server)
            .get(`/books/${bookId}`)
            .end((err, res) => {
                if (err)
                    return done();

                expect(res).to.have.status(200);
                expect(res.body).to.be.a("object");
                expect(res.body).to.have.property("id");
                expect(res.body).to.have.property("title");
                expect(res.body).to.have.property("author");
                done();
            });
    });
    it("should PUT an existing book", (done) => {
        const bookId = 1;
        const updatedBook = {id: bookId, title: "Harry Potter and the Chamber of Secrets", author: "J. K. Rowling"};

        chai.request(server)
        .put(`/books/${bookId}`)
        .send(updatedBook)
        .end((err, res) => {
            if (err)
                return done();

            expect(res).to.have.status(200);
            expect(res.body).to.be.a("object");
            expect(res.body.title).to.equal("Harry Potter and the Chamber of Secrets");
            expect(res.body.author).to.equal("J. K. Rowling");
            done();
        });
    });
    it("should DELETE an existing book", (done) => {
        const book = { id: "2", title: "Game of Thrones", author: "J. R. R. Martin" };

        chai.request(server)
            .post('/books')
            .send(book)
            .end((err, res) => {
                if (err) 
                    return done(err);
    
                chai.request(server)
                    .delete(`/books/${book.id}`)
                    .end((err, res) => {
                        if (err) 
                            return done(err);
    
                        expect(res).to.have.status(204);
                        done();
                    });
            });
    });
    
    it ("should return 404 when trying to GET, PUT, POST or DELETE a non-existing book", (done) => {
        const INVALID_ID = 9999;

        chai.request(server)
        .get(`/books/${INVALID_ID}`)
        .end((err, res) => {
            expect(res).to.have.status(404);
        });

        chai.request(server)
        .put(`/books/${INVALID_ID}`)
        .send({id: INVALID_ID, title: "NON EXISTING TITLE", author: "NON EXISTING AUTHOR"})
        .end((err, res) => {
            expect(res).to.have.status(404);
        });

        chai.request(server)
        .delete(`/delete/${INVALID_ID}`)
        .end((err, res) => {
            expect(res).to.have.status(404);
            done();
        });
    });
});