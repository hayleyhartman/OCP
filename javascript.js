$(function () {


    const toggleClass = () => {
        let prevActiveBtn = document.getElementsByClassName('b-active')
        $(prevActiveBtn).removeClass('b-active')
        let prevActiveP = document.getElementsByClassName('p-active')
        $(prevActiveP).removeClass('p-active')
    }

    $(".buttonGroupItem").click(function () {
        toggleClass()

        if (this.id === 'btnOne') {
            $(this).addClass('b-active')
            $('#pOne').addClass('p-active')
        } else if (this.id === 'btnTwo') {
            $(this).addClass('b-active')
            $('#pTwo').addClass('p-active')
        } else {
            $(this).addClass('b-active')
            $('#pThree').addClass('p-active')
        }

    })

    const locations = [{
            name: "Cleveland",
        },
        {
            name: "Houston",
        },
        {
            name: "Dallas",
        },
        {
            name: "New York City",
        },
        {
            name: "Columbus",
        },
        {
            name: "Chicago",
        },
        {
            name: "Los Angeles",
        },
        {
            name: "Denver",
        }
    ]

    locations.map(({
        name,
        url
    }) => {
        const dataList = document.getElementById('places');

        let option = document.createElement('option');

        option.setAttribute('value', name);

        option.setAttribute('href', url)

        dataList.appendChild(option);

        return `${name}: ${url}`
    });

    document.getElementById('searchBar').addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
        }
    });
    document.getElementById('searchBar').addEventListener('keyup', function (e) {
        console.log(e.keyCode)

        if (e.keyCode === 13) {
            const input = document.getElementById('searchBar').value;
            window.open(`https://www.google.com/maps/place/${input}`, '_blank');
        }
    })

});