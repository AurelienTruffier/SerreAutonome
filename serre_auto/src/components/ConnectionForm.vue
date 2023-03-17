<template>
    <div class="connection_form">
        <form action="">
            <label for="identifiant_input">Identifiant: </label>
            <input type="text" name="identifiant" id="identifiant_input">
            <label for="password_input">Mot de passe: </label>
            <input type="password" name="password" id="password_input">
            <input type="submit">
        </form>
    </div>
</template>

<script>
export default{
    name: 'ConnectionForm'
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