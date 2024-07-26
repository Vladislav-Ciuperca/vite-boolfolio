<template>
    <div class="contacts">
        <h2>Contacts</h2>

        <div class="mb-3 ">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" name="name" id="name" aria-describedby="nameHelper"
                placeholder="Luca Cielocammino" />
            <small id="nameHelper" class="form-text text-muted">Type your full name</small>
        </div>

        <div class="mb-3 ">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId"
                placeholder="palpatino@mail.com" />
            <small id="emailHelpId" class="form-text text-muted">Inserisci la tua mail</small>
        </div>

        <div class="mb-3 ">
            <label for="" class="form-label"></label>
            <textarea class="form-control" name="" id="" rows="3"></textarea>
        </div>
        


    </div>
</template>