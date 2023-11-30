<script setup>



</script>

<template>
  <header>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
     <div class="container-fluid">
       <a class="navbar-brand" href="#"> <img src="/src/assets/img/pokehub14.png" width="257" height="77" alt="Poké-Hub logo"></a>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <form class="d-flex" role="search">
           <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
           <button class="btn btn-outline-success" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg>
           </button>
          </form>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
             </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><img src="/src/assets/img/Gengar icon.png" width="59" height="51" alt="Gengar icon">Login</a>
            </li>
            <li class="nav-item">
             <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="#F9825C" class="bi bi-heart-fill" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
             </svg>
            </li>
          </ul>
    
        </div>
     </div>
    </nav>
  </header>
</template>


<style lang="scss" scoped>

header {
  background-color: #ffe788;
  background-image: linear-gradient(249deg, #ffe788 25%, #c6d0bf 58%, #d0d9e4 75%);
  
 }

</style>