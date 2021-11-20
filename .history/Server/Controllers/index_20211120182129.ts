import express, {Request, Response, NextFunction} from 'express';

//get reference to the game model class
import Game from '../Models/game';

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
export function DisplayGamesListPage(req: Request, res: Response, next: NextFunction): void
{
  //similar to db.game.find()
 Game.find(function(err, gamesCollection)
 {
   if(err)
   {
     console.error(err);
     res.end(err);
   }
   
    res.render('index', { title: 'games-list', page: 'Games Collection', games: gamesCollection });
   
 });
}