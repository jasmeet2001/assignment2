import express, {Request, Response, NextFunction} from 'express';

import passport from 'passport';

//create an instance of user model
import User from '../Models/user';


//get reference to the businessContact model class
import BusinessContact from '../Models/businessContact';

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'home', page: 'home'});
}
export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'about me', page: 'about' });
}
export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'projects', page: 'projects' });
}
export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'services', page: 'services' });
}
export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'contact me', page: 'contact' });
}
export function DisplayBusinessContactsListPage(req: Request, res: Response, next: NextFunction): void
{
  //similar to db.game.find()
 BusinessContact.find(function(err, businessContactsCollection)
 {
   if(err)
   {
     console.error(err);
     res.end(err);
   }
   
    res.render('index', { title: 'businessContacts-list', page: 'Business Contacts List', businessContacts: businessContactsCollection });
   
 });
}
/* functions for authentication */

export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'login', page: 'Login' });
}

export function ProcessLoginPage(req: Request, res:Response, next: NextFunction): void
{
    let loginInfo = 
    {
        username: req.body.username,
        password: req.body.password
    }
    

    passport.authenticate('local', (err, user, info) =>
    {
        console.log(user);
        //are there any servers errors?
        if(err)
        {
            console.error(err);
            return next(err);
        }

        //are there any login errors?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => 
        {
            // are there any db errors?
            if(err)
            {   
                console.error(err);
                return next(err);
            }
            console.log("Logged In successfully");
            return res.redirect('/businessContacts-list');
        });

    }) (req, res, next);
}

export function DisplayRegisterPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'register', page: 'Register' });
}
export function ProcessRegisterPage(req: Request, res:Response, next: NextFunction): void
{
    // instructions for new User object
    let newUser = new User
    ({
        username: req.body.username,
        emailaddress: req.body.emailaddress,
        displayName: req.body.firstName + "" + req.body.lastName
    });
    
    User.register(newUser, req.body.password, (err) =>{
        if(err){
            console.error('Error: Inserting New User');
            if(err.name == "UserExistsError")
            {
                console.error('Error: User Already Exists');
            }
            req.flash('registerMessage', 'Registration Error');

            return res.redirect('/register');
        }
        // after successful registration - lets login the user
        return passport.authenticate('local')(req,res, () =>
        {
            return res.redirect('businessContacts-list');
        });
    });
}
export function ProcessLogOutPage(req: Request, res:Response, next: NextFunction): void
{
    req.logOut();
    res.redirect('/login');
}
export function DisplayAddPage(req: Request, res:Response, next: NextFunction): void
{

}

export function ProcessAddPage (req: Request, res:Response, next: NextFunction): void
{

}
export function DisplayEditPage (req: Request, res:Response, next: NextFunction): void
{

}
export function ProcessEditPage (req: Request, res:Response, next: NextFunction): void
{

}
export function ProcessDeletePage (req: Request, res:Response, next: NextFunction): void
{

}