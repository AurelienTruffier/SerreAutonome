<template>
    <div class="connection_form">
        <!-- @submit.prevent="connection" empêche le formulaire de s'envoyer et exécute la fonction login() à la place  -->
        <form @submit.prevent="connection">
            <label for="username_input">Nom d'utilisateur: </label>
            <input type="text" v-model="username" name="username" id="username_input">
            <label for="password_input">Mot de passe: </label>
            <input type="password" v-model="password" name="password" id="password_input">
            <input type="submit">
        </form>
    </div>
</template>

<script>
export default{
    name: 'ConnectionForm',
    data() {
        return{
            //identifiants de connexions actuellement dans les inputs
            username: '',
            password: ''
        }
    },
    methods: {
        connection(event) {
            event.preventDefault();

            //récupère les valeurs de connexion dans la partie data du composant
            let username = this.username;
            let password = this.password;
            
            let data = new URLSearchParams();
            data.append("username", username);
            data.append("password", password);

            //on vérifie que les 2 champs sont tous les deux complétés
            if(username != '' && password != ''){
                //on effectue une requête AJAX vers le chemin 'connection' de notre serveur
                fetch('http://localhost:3000/connection', {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/x-www-form-urlencoded'
                    },
                    body: data
                })
                .then((response) => {
                    if (response.ok) {
                        return response.text();
                    } 
                    else{
                        throw new Error("Erreur de connexion");
                    }
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error(error);
                });
            }
            else{
                //on affiche 'erreur' dans la console si les deux champs ne sont pas complétés
                console.log('erreur');
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
.connection_form form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
}

.connection_form form label, input{
    font-family: 'Merriweather', serif;
    font-size: 1.2rem;
    font-weight: 500;
}

.connection_form form input{
    width: 480px;
    height: 32px;
    padding: 6px;
    border-radius: 8px;
    border: none;
    outline: none;
    margin: 18px 0;
}

.connection_form form input[type=submit]{
    box-sizing: content-box;
    background-color: #327F22;
    animation: 5s linear infinite;
    color: white;
    line-height: 32px;
    padding: 16px;
    transition: all 0.3s linear;
}
.connection_form form input[type=submit]:hover{
    width: 495px;
    box-sizing: content-box;
    background-color: rgb(220, 255, 163);
    color: #327F22;
    font-weight: 800;
    line-height: 32px;
    padding: 16px;
}
/* RESPONSIVE */
@media (max-width: 920px) {
    .connection_form form input{
        width: 380px;
        margin: 12px 0;
    }
  }
@media (max-width: 460px) {
    .connection_form form input{
        width: 250px;
        margin: 8px 0;
    }
  }
</style>