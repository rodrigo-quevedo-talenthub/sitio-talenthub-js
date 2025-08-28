Es la estructura de una page. Se puede reutilizar a lo largo de varias pages.

Por ejemplo, una layout comun es:

export default function DefaultLayout({children}){

    return (
        <header>
            ...
        </header>

        <main>
            {children}
        </main>

        <footer>
            ...
        </footer>
    );
}



El layout retornaria esa estructura JSX, y la personalizacion se logra pasando un "nested/child element" a ese layout como prop.