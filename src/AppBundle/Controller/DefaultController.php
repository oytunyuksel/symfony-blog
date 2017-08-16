<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $articles = $em->getRepository('AppBundle:Article')
            ->findAll();

        $categories = $em->getRepository('AppBundle:Category')
            ->findAll();

        $templating = $this->container->get('templating');

        $html = $templating->render('default/index.html.twig',[
            'articles' => $articles,
            'categories' => $categories
        ]);

        return new Response($html);
    }
}
