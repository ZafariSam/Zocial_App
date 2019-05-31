Vue.component('nav-bar', {
  data: function () {
    return {
      count: 0
    }
  },
  template:`
        <div class="nav-bar">
          <div style="padding: 20px 10%; display: flex;">
            <a href="./"><img src="img/svg/Zafari_Icon_Color.svg" alt="Zaf Logo White" width="40px" height= "40px"></a>
            <div style="margin-left: auto; display: flex;">
              <a href="./orders"><div style="padding: 10px;">My Orders</div></a>
              <div class ="social-links" style="padding: 12px">
                <a href="https://twitter.com/StudioZafari" target=”_blank”>
                  <img style="margin: 0 10px" src="img/svg/Twitter_Icon.svg" alt="Zaf Logo White" width="15px" height= "15px"></a>
                <a href="https://www.youtube.com/channel/UCwbWyaVhXMCslLqtx36GpGw?view_as=subscriber" target=”_blank”>
                  <img style="margin: 0 10px" src="img/svg/YT_Icon.svg" alt="Zaf Logo White" width="15px" height= "15px"></a>
                <a href="https://www.instagram.com/studio_zafari/" target=”_blank”>
                  <img style="margin: 0 10px" src="img/svg/Insta_Icon.svg" alt="Zaf Logo White" width="15px" height= "15px"></a>
              </div>
            </div>
          </div>
        </div>`
})



var vm = new Vue({
  el: '#app',
  data: {
    //States
    loading: true,
    selected: false,
    sent: false,
    preview: false,

    //Index Data
    vidNum: 4,
    imgNum: 2,
    emailAdd: "",
    customEmailAdd:"",
    checkedEmail:"",
    customColor: null,
    emailClass01: ['',''],
    emailClass02: ['',''],
    currency: 'ZAR',
    currencyBase: 1,
    currencySym: 'R',
    currencyData: {},
    mobTabHeight: null,
    valStyleCol: 'white',
    catalogueLimit: [0,6],
    temCata:{
      01:{
        Ref: 101,
        Title: "Classic Elegant Banner",
        Length: 30,
        Tagline: "Tagline for the template",
        Des: "A short description of the template and how it can use used.",
        Costs: [450],
        Imgs: ["img/Thumbnails/101_Thumb.jpg",
        ],
        previewVid: "https://vimeo.com/339504624",
      },
      02:{
        Ref: 102,
        Title: "Event Promo",
        Length: 15,
        Tagline: "Tagline for the template",
        Des: "Description",
        Costs: [350],
        Imgs: ["img/Thumbnails/102_Thumb.jpg",
        ],
        previewVid: "https://vimeo.com/339505170",
      },
      03:{
        Ref: 103,
        Title: "Geometric Fun",
        Length: 15,
        Tagline: "Tagline for the template",
        Des: "Description",
        Costs: [400],
        Imgs: ["img/Thumbnails/103_Thumb.jpg",
        ],
        previewVid: "https://vimeo.com/339505178",
      },
      04:{
        Ref: 104,
        Title: "Quirky Stencil Banner",
        Length: 30,
        Tagline: "Tagline for the template",
        Des: "Description",
        Costs: [400],
        Imgs: ["img/Thumbnails/104_Thumb.jpg",
        ],
        previewVid: "https://vimeo.com/339505185",
      },
      05:{
        Ref: 105,
        Title: "Retro Special",
        Length: 15,
        Tagline: "Tagline for the template",
        Des: "Description",
        Costs: [500],
        Imgs: ["img/Thumbnails/105_Thumb.jpg",
        ],
        previewVid: "https://vimeo.com/339505205",
      },
      06:{
        Ref: 106,
        Title: "Flash Sale",
        Length: 15,
        Tagline: "Tagline for the template",
        Des: "Description",
        Costs: [500],
        Imgs: ["img/Thumbnails/106_Thumb.jpg",
        ],
        previewVid: "https://vimeo.com/339505219",
      },
      07:{
        Ref: 107,
        Title: "3D Phone Demo",
        Length: 30,
        Tagline: "Tagline for the template",
        Des: "Description",
        Costs: [600],
        Imgs: ["img/Thumbnails/107_Thumb.jpg",
        ],
        previewVid: "https://vimeo.com/339505269",
      },
      08:{
        Ref: 108,
        Title: "Simple Phone Demo",
        Length: 30,
        Tagline: "Tagline for the template",
        Des: "Description",
        Costs: [500],
        Imgs: ["img/Thumbnails/108_Thumb.jpg",
        ],
        previewVid: "https://vimeo.com/339505422",
      },
      09:{
        Ref: 109,
        Title: "Catchy Phone Demo",
        Length: 30,
        Tagline: "Tagline for the template",
        Des: "Description",
        Costs: [500],
        Imgs: ["img/Thumbnails/109_Thumb.jpg",
        ],
        previewVid: "https://vimeo.com/339505358",
      },
    },
    cataLength: null,
    seeMore: true,
    cataScroll: 0,
    selectedTem:{
      Ref: "SelectedTem",
      Title: "Default",
      Tagline: "Tagline here",
      Des: "Description here",
      Costs: [200, 100],
      Imgs: ["../img/Stock/kenrick-mills-1567595-unsplash.jpg",
        ],
    },
    bkgPlace: "../",
    stages:{
      01:{
        Title: "Select a design",
        Des: "Look at our catalogue and choose a one of the designs",
        Img: "assets/Zocial_How_Stage_01.gif"
      },
      02:{
        Title: "Customize your order",
        Des: "Change the specifics of the order to suit your campaign.",
        Img: "assets/Zocial_How_Stage_02.gif"
      },
      03:{
        Title: "Confirm your order",
        Des: "Enter your email address and confirm you order.",
        Img: "assets/Zocial_How_Stage_03.gif"
      },
      04:{
        Title: "Receive your videos",
        Des: "Once your order has been confirmed we will inform you of the expect timeline",
        Img: "assets/Zocial_How_Stage_01.gif"
      },
    },
    currentStage:{
      Title: "Our Process",
      Des: "Hover over each of the steps to find out how the process works",
      Img: "assets/Zocial_How_Stage_00.gif"
    },
    orderData:{
      orderNo:["Pending"],
    },
    windowWidth: window.innerWidth,
    userLocation: { country: null },
    snackDefault: { text: "placeholder text"},

    //OrderData
    emailInput: null,
    orderStatus:"pending",
    orderInput: "",
    currentOrder:"#123456789123456789",
    fetchedData: {email: null, templateTitle: '', color: '', nVid: 0, nImg: 0, total:'', currency:'', dateAdded:{seconds:0},  },
    fetchedEmail: null,

  }, //End of Data

  methods: {
      sendEmailMain: function(){
        let self= this;
        db.collection("recieved").add({
          email: this.checkedEmail,
          templateTitle: this.selectedTem.Title,
          templateRef: this.selectedTem.Ref,
          nVid: this.vidNum,
          nImg: this.imgNum,
          colour: this.customColorCheck,
          total: this.calcVal,
          dateAdded: new Date(),
          readAccess: [],
          status: "pending",
          currency: this.currency,
          deliveryTime: null,
        })
        .then(function(docRef) {
            self.orderData.orderNo =[];
            self.orderData.orderNo.push(docRef.id);
            self.setCookie('OrderRef', self.orderData.orderNo[0], 5, '/orders');
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
          this.checkedEmail = "";
          this.sent= true;
          this.selected= false;
      },

      sendEmailSecondary: function(){
        let self= this;
        db.collection("customReq").add({
          email: this.checkedEmail,
        })
        .then(function(docRef) {
            self.snackCall('toast', 4000, 'Thanks! We will get back to you ASAP');
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
          this.checkedEmail = "";
      },

      validateEmail: function(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
        },

      validEmail: function(emailVar, send, emailMod, styleClass){
        let self = this;
        if (this.validateEmail(emailVar)) {
          //sendData
          this.checkedEmail = emailVar;
          this[emailMod] = "";
          this[send]()

        } else {
          this[styleClass] = ['#ff2e64', 'white'];
          setTimeout(function(){ self[styleClass] = []; }, 3000);
        }
        return false;
      },

      getWindowWidth: function(event) {
        this.windowWidth = document.documentElement.clientWidth;
      },

//Note: Call like this - currencySelect('AUD', '$')"//
      currencySelect: function(crt, crtSyb) {
        this.currency = crt;
        this.currencyBase = this.currencyData.rates[crt];
        this.currencySym = crtSyb;
      },

      getLocation: function(){
        self= this;
        fetch('http://ip-api.com/json/')
        .then(function(response){
          response.json().then(function(data){
            self.userLocation = data;
          })
        })
      },

      getProjectData: async function(ordRef){
        if(this.emailAdd && this.orderInput.length > 19){
          this.loading= true;
          await db.collection("recieved").doc(ordRef).get().then( doc => this.fetchedEmail = doc.data() );
        if (this.fetchedEmail.email == this.emailAdd)
            {
             this.loaderCall(1000);
             this.fetchedData = this.fetchedEmail;
             this.orderStatus = this.fetchedEmail.status;
            }
            else {
              this.loading = false;
              this.fetchedEmail = null
            };
        if(this.fetchedData.email){
          this.setCookie('OrderRef', this.orderInput, 5, '/orders');
          this.emailAdd = '';
          this.currentOrder = this.orderInput;
          this.orderInput = "";
        } else {
          this.emailClass01 = ['red'];
          setTimeout(function(){ self.emailClass01 = []; }, 3000);
        };
      } else {
        self = this;
        this.emailClass01 = ['red'];
        setTimeout(function(){ self.emailClass01 = []; }, 3000);
      };
    },

      addMore: function(){
          let cataState = this.catalogueLimit[1];
          cataState += 3;
          this.catalogueLimit.pop();
          this.catalogueLimit.push(cataState);
      },

      loaderCall: function(timeOut){
        let self = this;
        this.loading = true;
        setTimeout(function(){ self.loading = false }, timeOut);
      },

      setCookie: function (cname, cvalue, exdays, path) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();

        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=" + path;
      },

      getCookie: function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      },

      deleteCookie: function(cname, path){
        document.cookie = cname + "=" + this.currentOrder +"; expires=Thu, 10 Dec 2010 12:00:00 UTC; path=/" + path;
        location.reload();
      },

//Note: Call like this: snackCall('toast', 3000, 'Success! Your toast bar is working', initial)
      snackCall: function(id, timeout, textInp, color){
        this.snackDefault.text = textInp;
        var docID = document.getElementById(id);
        docID.style.backgroundColor = color;
        docID.style.opacity = 1;
        docID.style.bottom = "30px";
        setTimeout(function(){
          docID.style.opacity = 0;
          docID.style.bottom = "0px";
        }, timeout);
      },

      currencyGet: function(){
        fetch('https://api.exchangeratesapi.io/latest?base=ZAR')
         .then(
           function(response) {
             if (response.status !== 200) {
               console.log('Looks like there was a problem. Status Code: ' +
                 response.status);
               return;
             }
             response.json().then(function(data) {
               return self.currencyData = data;
             });
           }
         )
         .catch(function(err) {
           console.log('Fetch Error :-S', err);
         });
      }

  }, //End of Methods

  computed: {
    calcVal: function(){
      let costVal = this.selectedTem.Costs[0]*this.currencyBase
      let valVid = Math.round(costVal + (this.vidNum * (costVal/4)));
      let valImg = Math.round(this.imgNum * (costVal /10));
      let valTot = valVid + valImg;
      return valTot.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },

    moreCalc: function(){
      let a = this.windowWidth;
      let a10 =this.windowWidth/10;
      let b = this.cataScroll;
      let c = this.cataLength;
      let d = 420;
      let e = this.catalogueLimit[1];
      if((c * d ) > ((a-a10) - b)) {return true}
    },

    dateCalc: function(){
      var time = this.fetchedData.dateAdded.seconds;
      var x = new Date(time*1000);
      var day = x.getDate();
      var month = x.getMonth()+1;
      var year = x.getFullYear();

      return day + "/" + month + "/" + year;
    },

    deliveryDate: function(){
      if(this.fetchedData.deliveryTime){
        var time = this.fetchedData.deliveryTime.seconds;
        var x = new Date(time*1000);
        var day = x.getDate();
        var month = x.getMonth()+1;
        var year = x.getFullYear();

        return day + "/" + month + "/" + year;

      } else {return "Awaiting Confirmation"}
    },

    customColorCheck: function(){
      if(!this.customColor){
        return "Not Provided"
      } else {return this.customColor}
    }

  },//End of Computed

  watch:{
    calcVal: function(){
      let self = this;
      this.valStyleCol = "#00ecbc";
      setTimeout(function(){ self.valStyleCol = 'white'; }, 1000);
    },

    windowWidth: function(){
      if (this.windowWidth <= 600){
        this.catalogueLimit[1] = 4;
      } else if (this.windowWidth <= 800){
        this.cataScroll = 0;} else {
          this.catalogueLimit[1] = 6;
        }
    },

    emailAdd: function(){
      let eml = this.emailAdd;
      let emlAlt = eml.toLowerCase();
      this.emailAdd = emlAlt;
    }

  }, //End of Watcher

  created() {
      let self = this;
      setTimeout(function(){ self.loading = false; }, 1500);
      //Catalogue Length
      let ob = Object.keys(this.temCata);
      this.cataLength = ob.length;

      let pV = this.getCookie('pageView');
        if (pV == "") {
          this.setCookie('pageView', 1, 3, '/');
        } else {
          pV ++;
          this.setCookie('pageView', pV, 3, '/');
        }

      var oR = this.getCookie("OrderRef");
        if (oR != "") {
          db.collection("recieved").doc(oR).get().then(doc => this.fetchedData = doc.data() );
          this.currentOrder = oR;
        }

  }, //End of Created Hook

  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
    })
  }, //End of Mounted Hook

  beforeDestroy(){

  }

}) //End of Vue Component
