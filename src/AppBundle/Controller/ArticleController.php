<?php
/**
 * Created by PhpStorm.
 * User: Oytun
 * Date: 15.8.2017
 * Time: 19:29
 */

namespace AppBundle\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class ArticleController extends Controller
{
    /**
     * @Route("/articles/{slug}", name="article_show")
     */
    public function showAction($slug){

        $em = $this->getDoctrine()->getManager();

        $article = $em->getRepository('AppBundle:Article')
            ->findOneBy(array('slug' => $slug));

        $categories = $em->getRepository('AppBundle:Category')
            ->findAll();

        $templating = $this->container->get('templating');

        $html = $templating->render('articles/show.html.twig',[
            'article' => $article,
            'categories' => $categories
        ]);

        return new Response($html);
    }
}