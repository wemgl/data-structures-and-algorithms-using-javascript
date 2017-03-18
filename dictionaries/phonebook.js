function Dictionary() {
   this.datastore = new Array();
   this.add = add;
   this.find = find;
   this.remove = remove;
   this.showAll = showAll;
   this.count = count;
   this.clear = clear;
}

function add(key, value) {
   this.datastore[key] = value;
}

function find(key) {
   return this.datastore[key];
}

function remove(key) {
   delete this.datastore[key];
}

function showAll() {
   var key;
   var keys = Object.keys(this.datastore).map(function (element) { return new String(element); }).sort();
   for (key in keys) {
       if (this.datastore[keys[key]] == null) {
           continue;
       }
       print(keys[key] + ": " + this.datastore[keys[key]]);
   }
}

function count() {
  var n = 0;
  var key;
  for (key in this.datastore) {
    ++n;
  }
  return n;
}

function clear() {
  var key;
  for (key in this.datastore) {
    delete this.datastore[key];
  }
}

function open(file) {
    var backup = read(file).split("\n");
    var index;
    var dict = new Dictionary();
    for (index = 0; index < backup.length; index += 1) {
        var contact = backup[index].trim().split(" ");
        dict.add(contact[0], contact[1]);
    }
    return dict;
}

function displayNumberForContact(contact, dict) {
    return dict.find(contact); 
}

function displayAllContacts(dict) {
    print("All contacts");
    dict.showAll();
}

function addContact(contact, phone, contacts) {
    contacts.add(contact, phone);
    print("Contact: " + contact + " was added to your contacts");
}

function removeContact(contact, contacts) {
    contacts.remove(contact);
    print("Contact: " + contact + " was removed from your contacts");
}

function clearContacts(contacts) {
    contacts.clear();
}

// main program
var contacts = open("contacts.txt");
var contact = "Wembley";
var number = displayNumberForContact(contact, contacts);
print("The phone number for " + contact + " is " + number); 
displayAllContacts(contacts);
putstr("Enter new contact's name: ");
var name = readline();
putstr("Enter new contact's phone: ");
var phone = readline(); 
addContact(name, phone, contacts);
displayAllContacts(contacts);
putstr("Enter a contact's name to remove:");
name = readline();
removeContact(name, contacts);
displayAllContacts(contacts);
clearContacts(contacts);
displayAllContacts(contacts);
