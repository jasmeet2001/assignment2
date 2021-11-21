import express, {Request, Response, NextFunction} from 'express';

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
export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'login', page: 'Login' });
}