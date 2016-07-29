    var list = [];
    var count = -1;
    $('.preview').hide();
    $('.contactlist').hide();
    var Person = function(firstname, lastname, phonenumber, street, city, state) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
        this.street = street;
        this.city = city;
        this.state = state;
    }

    $(document).ready(function() {

        $('.submit').on('click', function() {
        	count++;
            var person = new Person();
            person.firstname = $('.firstname').val();
            person.lastname = $('.lastname').val();
            person.phonenumber = $('.phonenumber').val();
            person.street = $('.street').val();
            person.city = $('.city').val();
            person.state = $('.state').val();
            $('.preview').show();
            $('.contactlist').show();
            $('.preview h1').text(person.firstname + " " + person.lastname);
            $('.li1').text("First Name: " + person.firstname);
            $('.li2').text("Last Name: " + person.lastname);
            $('.li3').text("Phone Number: " + person.phonenumber);
            $('.li4').text("Address: " + person.street + ", " + person.city + ", " + person.state);
            $('.contactlist ul').append("<a href='#' id='" + count + "'>" + person.firstname + " " + person.lastname + "</a>");
            console.log(person);
            list.push(person);            
            console.log(count);
            $('input').val('');
        })

        $('.contactlist').on('click', 'a', function(e) {
        	var index = parseInt(e.target.id)
            $('.preview h1').text(list[index].firstname + " " + list[index].lastname);
            $('.li1').text("First Name: " + list[index].firstname);
            $('.li2').text("Last Name: " + list[index].lastname);
            $('.li3').text("Phone Number: " + list[index].phonenumber);
            $('.li4').text("Address: " + list[index].street + ", " + list[index].city + ", " + list[index].state);
        	 console.log(count);
        });
    })
