const initBook = () => ({ id: crypto.randomUUID() });
const setTitle = (title: any) => (book: any) => ({ ...book, title });

// Cw 1: Stworz nowa ksiazke i zapisz na zmiennej
// Cw 2: Wykorzystaj ksiazke, nadajac jej tytul
// Cw 3: Stworz nowa funkcje do ustawiania/zmiany autora
// Cw 4: Wykorzystaj ksiazke i nadaj jej tytul, a potem autor
// (uzywaja R.pipe lub nie)
