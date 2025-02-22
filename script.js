document.addEventListener('DOMContentLoaded', () => {
    const showsContainer = document.getElementById('showGrid');
    const searchInput = document.getElementById('searchInput');
    const genreSelector = document.getElementById('genreSelector');
    const ratingFilter = document.getElementById('ratingFilter');
    const resultCount = document.getElementById('resultCount');
    const modal = document.getElementById('modal');
    const modalInfo = document.getElementById('modal-info');
    const closeButton = document.querySelector('.close-button');

    const showDetails = {
        'The Vampire Diaries': {
            name:'The Vampire Diaries',
            image: './pics/vampire.jpg',
            genre: 'Drama',
            rating: 9,
            description: 'The Vampire Diaries is a supernatural drama television series based on the book series of the same name by L.J. Smith. The series follows the life of Elena Gilbert, who falls in love with a vampire named Stefan Salvatore and becomes embroiled in a love triangle with Stefan\'s brother, Damon.'
        },
        'The Lord of the Rings': {
            name:'The Lord of the Rings',
            image: './pics/lord.jpg',
            genre: 'Fantasy',
            rating: 8,
            description: 'The Lord of the Rings is a fantasy series based on the novel by J.R.R. Tolkien. It follows the journey of a young hobbit named Frodo Baggins who is entrusted with the task of destroying a powerful ring that can bring about the end of Middle-earth.'
        },
        'The Hobbit': {
            name:'The Hobbit',
            image: './pics/hobbit.jpg',
            genre: 'Fantasy',
            rating: 8.5,
            description: 'The Hobbit is a fantasy series based on the novel by J.R.R. Tolkien. It follows the journey of a hobbit named Bilbo Baggins who joins a group of dwarves on a quest to reclaim their homeland from the dragon Smaug.'
        },
        'Harry Potter': {
            name:'Harry Potter',
            image: './pics/harry.jpg',
            genre: 'Fantasy',
            rating: 9.2,
            description: 'Harry Potter is a fantasy series based on the novels by J.K. Rowling. It follows the life of a young wizard named Harry Potter and his adventures at the Hogwarts School of Witchcraft and Wizardry.'
        },
        'Pirates of the Caribbean': {
            name:'Pirates of the Caribbean',
            image: './pics/pirates.jpg',
            genre: 'Adventure',
            rating: 7.5,
            description: 'Pirates of the Caribbean is an adventure series that follows the adventures of Captain Jack Sparrow and his crew as they navigate through the treacherous waters of the Caribbean Sea.'
        },
        'The Handmaid\'s Tale': {
            name:'The Handmaid\'s Tale',
            image: './pics/handmaid.jpg',
            genre: 'Drama',
            rating: 8.5,
            description: 'The Handmaid\'s Tale is a dystopian drama series based on the novel by Margaret Atwood. It follows the life of Offred, a woman forced into servitude in a society where women have no rights.'
        },
        'Night Manager': {
            name:'Night Manager',
            image: './pics/night.jpg',
            genre: 'Thriller',
            rating: 8.8,
            description: 'Night Shift is a thriller series that follows the lives of the medical staff working the night shift at San Antonio Memorial Hospital as they deal with the challenges of their demanding jobs.'
        },
        'Ford vs Ferrari': {
            name:'Ford vs Ferrari',
            image: './pics/ford.jpg',
            genre: 'Biography',
            rating: 8.2,
            description: 'Ford vs Ferrari is a biographical drama series that follows the real-life story of the intense rivalry between Ford and Ferrari as they compete to win the 24 Hours of Le Mans in 1966.'
        },
        'Vikings': {
            name:'Vikings',
            image: './pics/vikings.jpg',
            genre: 'Historical',
            rating: 9,
            description: 'Vikings is a historical drama series that follows the adventures of Ragnar Lothbrok, a legendary Viking chieftain, as he rises to become the king of the Viking tribes.'
        },
        'Game of Thrones': {
            name:'Game of Thrones',
            image: './pics/game.jpg',
            genre: 'Fantasy',
            rating: 9.5,
            description: 'Game of Thrones is a fantasy drama series based on the novels by George R.R. Martin. It follows the power struggles among noble families as they compete for control of the Iron Throne of the Seven Kingdoms.'
        },
        'Peaky Blinders': {
            name:'Peaky Blinders',
            image: './pics/peaky.jpg',
            genre: 'Crime',
            rating: 9,
            description: 'Peaky Blinders is a crime drama series that follows the Shelby crime family in the aftermath of World War I as they rise to power in Birmingham, England.'
        },
        'The 100': {
            name:'The 100',
            image: './pics/the 100.jpg',
            genre: 'Drama',
            rating: 8.5,
            description: 'The 100 is a post-apocalyptic drama series that follows a group of young survivors who are sent back to Earth after a devastating nuclear apocalypse to see if it is habitable again.'
        },
        'Friends': {
            name:'Friends',
            image: './pics/friends.jpg',
            genre: 'Comedy',
            rating: 9.5,
            description: 'Friends is a comedy series that follows the lives and adventures of six friends living in New York City as they navigate through their personal and professional lives.'
        },
        'Prison Break': {
            name:'Prison Break',
            image: './pics/prison.jpg',
            genre: 'Thriller',
            rating: 9,
            description: 'Prison Break is a thriller series that follows the story of two brothers, one of whom is sentenced to death for a crime he did not commit. The other brother devises an elaborate plan to help him escape from prison.'
        },
        'From': {
            name:'From',
            image: './pics/from.jpg',
            genre: 'Horror',
            rating: 8.5,
            description: 'From is a horror series that follows the story of a small town where people mysteriously disappear without a trace. The residents are trapped in a nightmarish reality where they must uncover the dark secrets of the town to survive.'
        }
    };

    function displayShows(showsList) {
        showsContainer.innerHTML = '';
        showsList.forEach(show => {
            const showElement = document.createElement('div');
            showElement.classList.add('show-card');
            showElement.setAttribute('data-genre', show.genre);
            showElement.setAttribute('data-rating', show.rating);
            showElement.innerHTML = `
                <img src="${show.image}" alt="${show.name}">
                <div class="show-info">
                    <h3>${show.name}</h3>
                    <p>Rating: ${show.rating}/10</p>
                    <div class="like-dislike">
                        <span class="like-button">👍</span>
                        <span class="dislike-button">👎</span>
                    </div>
                </div>
                <div class="show-details">
                    <p>${show.description}</p>
                </div>
            `;
            showsContainer.appendChild(showElement);

            showElement.addEventListener('click', () => {
                openModal(show);
            });
        });
        resultCount.textContent = `Displaying ${showsList.length} shows`;
    }

    function openModal(show) {
        modalInfo.innerHTML = `
            <h2>${show.name}</h2>
            <img src="${show.image}" alt="${show.name}">
            <p>Genres: ${show.genre}</p>
            <p>Rating: ${show.rating}/10</p>
            <p>${show.description}</p>
        `;
        modal.style.display = 'flex';
    }

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', event => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    searchInput.addEventListener('input', event => {
const searchTerm = event.target.value.toLowerCase();
        const filteredShows = Object.keys(showDetails).filter(showName => {
            return showName.toLowerCase().includes(searchTerm);
        }).map(showName => showDetails[showName]);
        displayShows(filteredShows);
    });

    genreSelector.addEventListener('change', event => {
        const selectedGenre = event.target.value;
        const filteredShows = Object.keys(showDetails).filter(showName => {
            return showDetails[showName].genre.includes(selectedGenre);
        }).map(showName => showDetails[showName]);
        displayShows(filteredShows);
    });

    ratingFilter.addEventListener('change', event => {
        const selectedRating = event.target.value;
        const filteredShows = Object.keys(showDetails).filter(showName => {
            return showDetails[showName].rating >= selectedRating;
        }).map(showName => showDetails[showName]);
        displayShows(filteredShows);
    });

    displayShows(Object.keys(showDetails).map(showName => showDetails[showName]));
});