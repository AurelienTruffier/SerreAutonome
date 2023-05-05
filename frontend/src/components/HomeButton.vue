<template>
    <div class="home_button">
        <button role="button"><router-link :to="link">{{ title }}</router-link></button>
    </div>
</template>

<script>
export default {
    props:{
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
    name: 'HomeButton'
}
</script>

<style scoped>
    .home_button button{
        box-sizing: content-box;
        width: 390px;
        height: 50px;
        margin: 12px;
        background-color: #327F22;
        cursor: pointer;
        border: none;
        outline: none;
        border-radius: 8px;
        padding: 8px;
        transition: transform 0.3s linear;
    }
    .home_button button:hover{
        transform: scale(1.1);
    }
    .home_button a{
        font-size: 1.4rem;
        font-family: 'Merriweather', serif;
        text-decoration: none;
        color: white;
    }

    /* RESPONSIVE */
    @media (max-width: 1000px) {
        .home_button button{
            width: 300px;
            height: 55px;
        }
        .home_button a{
            font-size: 1.35rem;
        }
    }

    @media (max-width: 780px) {
        .home_button button{
            width: 180px;
            height: 48px;
        }
        .home_button a{
            font-size: 1.2rem;
        }
    }

    @media (max-width: 560px) {
        .home_button button{
            width: 130px;
            height: 42px;
        }
        .home_button a{
            font-size: 1.1rem;
        }
    }

    @media (max-width: 420px) {
        .home_button button{
            width: 180px;
            height: 36px;
            margin: 5px;
        }
        .home_button a{
            font-size: 1rem;
        }
    }
    
</style>