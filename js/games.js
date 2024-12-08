import games from "./choice.js";

console.log(games)

const launchGame = (gameId) => {
    switch (gameId) {
        case 1:
            id1();
            break;
        case 2:
            id2();
            break;
        case 3:
            id3();
            break;
        case 4:
            id4();
            break;
        case 5:
            id5();
            break;
        case 6:
            id6();
            break;
        case 7:
            id7();
            break;
        case 8:
            id8();
            break;
        case 9:
            id9();
            break;
        case 10:
            id10();
            break;
        default:
            console.log("Game not found");
    }
}

const displayGames = (games) => {
    const allSections = document.querySelectorAll("#gameSection")
    allSections.forEach(sect => {
        sect.classList.add("visually-hidden")
    })
    games.forEach(game => {
        const gameSection = document.querySelector(`[data-game="${game.id}"]`)
        gameSection.classList.remove("visually-hidden");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayGames(games)
})

//  Перевірка на високосний рік (1)
const id1 = () => {
    document.getElementById("year-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const year = document.getElementById("year").value;

    if (year % 4 === 0) {
        alert("Ви народилися у високосний рік!");
    }               else {
        alert("Ви народилися не у високосний рік(");
    }
})};





// Гра "Яке число загадав комп'ютер?" (2)
const id2 = function action(e) {
    e.preventDefault();

    const number = parseInt(document.getElementById("number").value);

    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const computerNum = randomNum(1, 10);

    if (!Number.isInteger(number) || number < 1 || number > 10) {
        alert("Ви ввели некоректне число");
    } else {
        if (number === computerNum) {
            alert(`Вітаю, ви вгадали число ${computerNum}`);
        } else {
            alert(`Ви програли, комп'ютер загадав ${computerNum}`);
        }
    }
}
// document.getElementById("num-form").addEventListener("submit", action);



// Гра Камінь-Ножиці-Папір (3)
const id3 = () => {
    let playerScore = 0;
    let computerScore = 0;
    const refs = {
        btns: document.querySelectorAll("[data-btn]"),
    };

    const getComputerChoice = () => {
        const choices = ["Камінь", "Ножиці", "Папір"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };

    const playGame = (playerChoice) => {
        const computerChoice = getComputerChoice();
        let result = "";
        if (playerChoice === computerChoice) {
            result = "Нічия!";
        } else if (
            (playerChoice === "Камінь" && computerChoice === "Ножиці") ||
            (playerChoice === "Ножиці" && computerChoice === "Папір") ||
            (playerChoice === "Папір" && computerChoice === "Камінь")
        ) {
            result = "Ви виграли!";
            playerScore++;
        } else {
            result = "Комп'ютер виграв!";
            computerScore++;
        }
        document.getElementById(
            "result"
        ).innerText = `Ви вибрали ${playerChoice}, комп'ютер вибрав ${computerChoice}. ${result}`;
        document.getElementById("playerScore").innerText = playerScore;
        document.getElementById("computerScore").innerText = computerScore;
    };
    refs.btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const choice = btn.getAttribute("data-btn");
            playGame(choice);
        });
    });
}





// Калькулятор (4)
const id4 = () => {
    const calcRefs = {
        btns: window.document.querySelectorAll("[data-calc-btn]"),
    };
    const calculate = (operator) => {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var result;

        switch (operator) {
            case "+":
                result = num1 + num2;
                document.getElementById("calc-result").innerHTML =
                    "Сума чисел " + num1 + " і " + num2 + " = " + result;
                break;
            case "-":
                result = num1 - num2;
                document.getElementById("calc-result").innerHTML =
                    "Різниця чисел " + num1 + " і " + num2 + " = " + result;
                break;
            case "*":
                result = num1 * num2;
                document.getElementById("calc-result").innerHTML =
                    "Добуток чисел " + num1 + " і " + num2 + " = " + result;
                break;
            case "/":
                if (num2 !== 0) {
                    result = num1 / num2;
                    document.getElementById("calc-result").innerHTML =
                        "Частка чисел " + num1 + " і " + num2 + " = " + result;
                } else {
                    document.getElementById("calc-result").innerHTML =
                        "Ділення на нуль неможливе!";
                }
                break;
            default:
                document.getElementById("calc-result").innerHTML = "Невірний оператор";
        }
    };
    calcRefs.btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const operator = btn.getAttribute("data-calc-btn");
            calculate(operator);
        });
    });
}



// Калькулятор часу (5)
const id5 = function calcTime(time) {
    let hours = Math.floor(time / 60);
    let minutes = time % 60;

    return console.log(hours + ":" + minutes);
}



// Google dino (6)
const id6 = () => {
    const refs = {
        game: document.querySelector(".game"),
        dino: document.getElementById("dino"),
        cactus: document.getElementById("cactus"),
        startBtn: document.querySelector(".start-btn"),
        resetBtn: document.querySelector(".reset-btn"),
        counter: document.getElementById("counter"),
    };

    function action(e) {
        let counter = 0;
        refs.cactus.classList.add("start");
        setInterval(updateCounter, 1000);
        refs.game.addEventListener("click", (e) => {
            jump();
        });
        function updateCounter() {
            counter++;
            refs.counter.textContent = counter.toString().padStart(4, "0");
        }
        function jump() {
            refs.dino.classList.add("jump");

            setTimeout(() => {
                refs.dino.classList.remove("jump");
            }, 500);
        }
        let isAlive = setInterval(() => {
            let dinoTop = parseInt(
                window.getComputedStyle(refs.dino).getPropertyValue("top")
            );
            let cactusLeft = parseInt(
                window.getComputedStyle(refs.cactus).getPropertyValue("left")
            );
            if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
                refs.cactus.classList.remove("start");
                alert("Game Over");
            }
        }, 10);
    }

// refs.startBtn.addEventListener("click", action);
}



// Football (7)
const id7 = () => {
    const area = document.querySelector(".area");
    const ball = document.querySelector(".ball");

    function action(e) {
        const containerRect = area.getBoundingClientRect();
        const elementRect = ball.getBoundingClientRect();

        const elementHalfWidth = elementRect.width / 2;
        const elementHalfHeight = elementRect.height / 2;

        let x = e.clientX - containerRect.left - elementHalfWidth;
        let y = e.clientY - containerRect.top - elementHalfHeight;

        x = Math.max(0, Math.min(x, containerRect.width - elementRect.width));
        y = Math.max(0, Math.min(y, containerRect.height - elementRect.height));

        ball.style.left = x + "px";
        ball.style.top = y + "px";
        console.log("Finish");
    }

// area.addEventListener("click", action);
}




// Введіть 3 числа (8)
const id8 = () => {
    function getBiggestNum(n1, n2, n3) {
        if (
            typeof n1 !== "number" ||
            typeof n2 !== "number" ||
            typeof n3 !== "number"
        )
            return alert("Please, enter a number!");

        return Math.max(n1, n2, n3);
    }

    console.log(getBiggestNum(1, 44, 15));
}



// Слайдер (9)
const id9 = () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slides img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function updateButtons() {
        prevButton.classList.toggle("disabled", currentIndex === 0);
        nextButton.classList.toggle("disabled", currentIndex === slides.length - 1);
    }

    function showSlide(index) {
        const slideWidth = slides[0].clientWidth;
        document.querySelector(".slides").style.transform = `translateX(-${
            index * slideWidth
        }px)`;
        updateButtons();
    }

    function prevSlide() {
        console.log("prev click");

        if (currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
        }
    }

    function nextSlide() {
        console.log("next click");
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            showSlide(currentIndex);
        }
    }

    updateButtons();
    document.addEventListener("DOMContentLoaded", (e) => {
        prevButton.addEventListener("click", prevSlide);
        nextButton.addEventListener("click", nextSlide);
    });
}




// Масив вчених (10)
const id10 = () => {
    const scientists = [
        {
            name: "Albert",
            surname: "Einstein",
            born: 1879,
            dead: 1955,
            id: 1,
        },
        {
            name: "Isaac",
            surname: "Newton",
            born: 1643,
            dead: 1727,
            id: 2,
        },
        {
            name: "Galileo",
            surname: "Galilei",
            born: 1564,
            dead: 1642,
            id: 3,
        },
        {
            name: "Marie",
            surname: "Curie",
            born: 1867,
            dead: 1934,
            id: 4,
        },
        {
            name: "Johannes",
            surname: "Kepler",
            born: 1571,
            dead: 1630,
            id: 5,
        },
        {
            name: "Nicolaus",
            surname: "Copernicus",
            born: 1473,
            dead: 1543,
            id: 6,
        },
        {
            name: "Max",
            surname: "Planck",
            born: 1858,
            dead: 1947,
            id: 7,
        },
        {
            name: "Katherine",
            surname: "Blodgett",
            born: 1898,
            dead: 1979,
            id: 8,
        },
        {
            name: "Ada",
            surname: "Lovelace",
            born: 1815,
            dead: 1852,
            id: 9,
        },
        {
            name: "Sarah E.",
            surname: "Goode",
            born: 1855,
            dead: 1905,
            id: 10,
        },
        {
            name: "Lise",
            surname: "Meitner",
            born: 1878,
            dead: 1968,
            id: 11,
        },
        {
            name: "Hanna",
            surname: "Hammarström",
            born: 1829,
            dead: 1909,
            id: 12,
        },
    ];
    const scientistsWhoBornIn19St = scientists.filter(
        (s) => s.born > 1801 && s.born < 1900
    );
// console.log("s:", scientistsWhoBornIn19St);
    const sumAllyear = scientists.reduce(
        (acc, el) => acc + (el.dead - el.born),
        0
    );
// console.log("s:", sumAllyear);
    const sortByName = () => {
        return scientists.sort((a, b) => {
            console.log("a:", a);
            console.log("b:", b);

            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    };
// console.log(sortByName());
    const sortByAge = scientists.sort(
        (a, b) => a.dead - a.born - (b.dead - b.born)
    );
// console.log(sortByAge);
    const sortByYear = scientists.filter(
        (s) => s.born < 1401 || s.born > 1699
    );
// console.log(sortByYear);
    const findOldestBornScientist = () => {
        let oldestBornScientist = scientists[0];
        scientists.forEach((s) => {
            if (s.born > oldestBornScientist.born) oldestBornScientist = s;
        });

        return oldestBornScientist;
    };
// console.log(findOldestScientist());
    const findAge = () => {
        const scientist = scientists.find((s) => {
            if (s.name !== "Albert" && s.surname !== "Einstein") return false;
            return s;
        });
        return scientist.born;
    };
// console.log(findAge());
    const scientistsWithC = scientists.filter((s) =>
        s.surname.startsWith("C")
    );
// console.log(scientistsWithC);
    const scientistsWithoutA = scientists.filter(
        (s) => !s.name.startsWith("A")
    );
// console.log(scientistsWithoutA);
    const findOldestScientist = () => {
        let oldestScientist = scientists[0];
        let biggestAge = oldestScientist.dead - oldestScientist.born;
        scientists.forEach((s) => {
            let age = s.dead - s.born;
            if (age > biggestAge) oldestScientist = s;
        });

        return oldestScientist;
    };
    const findYoungestScientist = () => {
        let youngestScientist = scientists[0];
        let smallestAge = youngestScientist.dead - youngestScientist.born;
        scientists.forEach((s) => {
            let age = s.dead - s.born;
            if (age < smallestAge) youngestScientist = s;
        });
        return youngestScientist;
    };
// console.log("Oldest scientist:", findOldestScientist());
// console.log("Youngest scientist:", findYoungestScientist());
    const matchingInitialsScientists = scientists.filter(
        (scientist) => scientist.name[0] === scientist.surname[0]
    );

    console.log(matchingInitialsScientists);

    const allWorkedIn19thCentury = scientists.every(
        (scientist) => scientist.born <= 1900 && scientist.dead >= 1801
    );

    console.log(allWorkedIn19thCentury);
}