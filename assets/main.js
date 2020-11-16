var app = new Vue (
  {
    el: '#root',
    data: {
      selectedContactIndex: 0,
      contacts: [
        {
          name: 'Michele',
          avatar: 'img/man2.png',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent',
              activeMenu: false,
              showDropdownMenu: false
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di dargli da mangiare',
              status: 'sent',
              activeMenu: false,
              showDropdownMenu: false
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received',
              activeMenu: false,
              showDropdownMenu: false
            }
          ],
          contactClasses: [
            'contact', 'selected'
          ],
          selectedChat: [
            'selected-chat',
          ]
        },
        {
          name: 'Fabio',
          avatar: 'img/man.png',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent',
              activeMenu: false,
              showDropdownMenu: false
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received',
              activeMenu: false,
              showDropdownMenu: false
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa',
              status: 'sent',
              activeMenu: false,
              showDropdownMenu: false
            }
          ],
          contactClasses: [
            'contact'
          ],
          selectedChat: [
            'selected-chat', 'disabled'
          ]
        },
        {
          name: 'Samuele',
          avatar: 'img/boy.png',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received',
              activeMenu: false,
              showDropdownMenu: false
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent',
              activeMenu: false,
              showDropdownMenu: false
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received',
              activeMenu: false,
              showDropdownMenu: false
            }
          ],
          contactClasses: [
            'contact'
          ],
          selectedChat: [
            'selected-chat', 'disabled'
          ]
        },
        {
          name: 'Luisa',
          avatar: 'img/woman.png',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent',
              activeMenu: false,
              showDropdownMenu: false
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received',
              activeMenu: false,
              showDropdownMenu: false
            }
          ],
          contactClasses: [
            'contact'
          ],
          selectedChat: [
            'selected-chat', 'disabled'
          ]
        },
        {
          name: 'Sabrina',
          avatar: 'img/girl.png',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Andiamo al cinema stasera?',
              status: 'sent',
              activeMenu: false,
              showDropdownMenu: false
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ci vediamo alle 20.00 :)',
              status: 'received',
              activeMenu: false,
              showDropdownMenu: false
            }
          ],
          contactClasses: [
            'contact'
          ],
          selectedChat: [
            'selected-chat', 'disabled'
          ]
        },
      ],
      user: {
        message:'',
        status: 'sent'
      },
      contactMessage: {
        message: 'Ciao!!',
        status: 'received'
      },
      userSearch:'',

    },
    methods: {
      onSelectedContact(index) {
        this.contacts[index].contactClasses = ['contact', 'selected'];
        this.contacts[index].selectedChat = ['selected-chat'];
        for (var i = 0; i < this.contacts.length; i++) {
          if(i != index){
            this.contacts[i].contactClasses = ['contact'];
            this.contacts[i].selectedChat = ['selected-chat', 'disabled'];
          }
        }
        this.selectedContactIndex = index;

      },
      sendMessage() {
        this.contacts[this.selectedContactIndex].messages.push(this.user);
        this.user = {message: '', status: 'sent'};
        setTimeout(() => {
          this.contacts[this.selectedContactIndex].messages.push(this.contactMessage);
        }, 1000);
      },
      searchContact() {
        this.contacts.forEach((contact, i) => {
          contact.visible = contact.name.toLowerCase().startsWith(this.userSearch.toLowerCase());
          console.log(contact.visible);
        });
      },
      showIconDropdownMenu(item) {
        item.activeMenu = true;
      },
      hideIconDropdownMenu(item) {
        item.activeMenu = false;
      },
      openDropdownMenu(item) {
        item.showDropdownMenu = true;
        console.log('click');
      },
      deleteMessage(index) {
        console.log('click');
        this.contacts[this.selectedContactIndex].messages.splice(index, 1);
        console.log(index);
      },
      closeDropdownMenu() {
        console.log('click');
      
      }

    }

  }
)
