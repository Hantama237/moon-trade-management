// Login screen
var loginTemplate = (error) => /*html*/

`<div class="login flex min-h-screen bg-neutral justify-center items-center">
    <div class="card w-full max-w-sm bg-base-100 px-4 py-8 shadow-xl">
        <div class="px-4"><i class="h-32 w-32 block mx-auto i-logos-feathersjs invert" alt=""></i>
            <h1 class="text-5xl font-bold text-center my-5 bg-clip-text bg-gradient-to-br">
                MoonTrade
            </h1>
        </div>
        <form class="card-body pt-2">
            ${error? /*html*/ 
            `<div class="alert alert-error justify-start">
                <i class="i-feather-alert-triangle"></i>
                <span class="flex-grow">${error.message}</span>
            </div>`
            : ''}
            <div class="form-control">
                <label class="label" for="email"><span class="label-text">Email</span></label>
                <input class="input input-bordered" name="email" type="text" placeholder="enter email">
            </div>
            <div class="form-control mt-0">
                <label class="label" for="password"><span class="label-text">Password</span></label>
                <input class="input input-bordered" name="password" type="password" placeholder="enter password">
            </div>
            <div class="form-control mt-6"><button class="btn" id="login" type="button">Login</button></div>
            
        </form>
    </div>
</div>`
// <div class="form-control mt-6"><button class="btn" id="signup" type="button">Signup</button></div>