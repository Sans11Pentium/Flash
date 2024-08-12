export default function Hero(){
    return(
        <div
        className="hero min-h-screen mt-4"
        style={{
            backgroundImage: "url(https://esllibrary.s3.amazonaws.com/uploads/post/title_image/1570/Tanya_Ten-Ways-to-Use-Flashcards-in-Class_Banner.png)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">The easiest way to make and study flashcards</h1>
            <p className="mb-5">
            A better way to study with flashcards is here. Quizlet makes it simple to create your own flashcards, study those of a classmate, or search our archive of millions of flashcard decks from other students.
            </p>
            <button className="btn bg-teal-500">Get Started</button>
            </div>
        </div>
        </div>
    )
}