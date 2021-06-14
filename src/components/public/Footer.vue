<template>
  <div id="footer " class="bg-f">
    <div class="legal px-5 py-3">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" v-for="item in footer" :key="item.title">
            <h3 class="black--text">{{ item.title }}</h3>
            <div class="mt-1" v-for="lien in item.liens" :key="lien">
              <a class="link-2" :href="lien.url">
                <v-icon v-if="lien.icon">{{ lien.icon }}</v-icon>
                {{ lien.name }}
              </a>
            </div>
          </v-col>
          <v-col cols="12" sm="6" class="logo">
            <!-- <h3>Tokpa</h3> -->
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="copy text-center bg-primaire white--text py-3">
      Afriford University Copyright &copy; 2021 | Designed by
      <a href="" class="bold white--text">Doctor Mavix</a> | All right reserve
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer: [
        {
          title: "Userfull link",
          liens: [
            {
              name: "Home",
              url: "/",
            },
            {
              name: "Faculties and Program",
              url: "/faculties-programs",
            },
            {
              name: "Fees and Funding",
              url: "/fees-funding",
            },
            {
              name: "Admission",
              url: "/admission",
            },
            {
              name: "Online program",
              url: "/online-program",
            },
            {
              name: "Scholarship",
              url: "/scholarship",
            },
            {
              name: "Contact",
              url: "/contact",
            },
          ],
        },
        {
          title: "Contact Information",
          liens: [
            {
              icon: "mdi-facebook",
              name: "Afriford University",
              url: "https://www.facebook.com/afriford/",
            },
            {
              icon: "mdi-gmail",
              name: "afriforduniversity@gmail.com",
              url: "/contact",
            },
          ],
        },
      ],
      legal: [
        {
          title: "informations légal",
          liens: [
            {
              name: "blog",
              url: "/blog",
            },
            {
              name: "Apropos de nous",
              url: "/apropos",
            },
            {
              name: "Partenaire",
              url: "/apropos",
            },
            {
              name: "pays de livraison",
              url: "/apropos",
            },
            {
              name: "Contactez nous",
              url: "/apropos",
            },
          ],
        },
        {
          title: "Aide  ",
          liens: [
            {
              name: "Vendre des produits physiques sur Tokpa",
              url: "/blog",
            },
            {
              name: "Vendre des produits numériques sur Tokpa",
              url: "/apropos",
            },
            {
              name: "Faire de l'affiliation sur Tokpa",
              url: "/apropos",
            },
            {
              name: "Faire des annonces et des publicités sur Tokpa",
              url: "/apropos",
            },
          ],
        },
        // {
        //     title:"Méthodes de payements ",
        //     liens : [
        //         {
        //             name :'Mtn momo',
        //             url :'/blog'
        //         },
        //         {
        //             name :'Perfect money',
        //             url :'/apropos'
        //         },
        //         {
        //             name :"Bitcoin",
        //             url :'/apropos'
        //         },
        //         {
        //             name :'Faire des annonces et des publicités sur Tokpa',
        //             url :'/apropos'
        //         },

        //     ]
        // },
        // {
        //     title:"Services",
        //     liens : [
        //         {
        //             name :'Mtn momo',
        //             url :'/blog'
        //         },
        //         {
        //             name :'Perfect money',
        //             url :'/apropos'
        //         },
        //         {
        //             name :"Bitcoin",
        //             url :'/apropos'
        //         },
        //         {
        //             name :'Faire des annonces et des publicités sur Tokpa',
        //             url :'/apropos'
        //         },

        //     ]
        // }
      ],
    };
  },
};
</script>

<style>
#footer .footer {
  border-top: 1px solid rgb(200, 199, 199);
}
#footer .footer a {
  color: white !important;
  display: block;
}

#footer .legal {
  border-top: 1px solid rgb(200, 199, 199);

  color: white;
}

#footer .legal a {
  display: block;
  color: white;
}
#footer .copy {
  color: white;
}

#footer .copy a {
  color: white;
  font-weight: bold;
}
</style>
