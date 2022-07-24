<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;

class Home extends BaseController
{
    use ResponseTrait;

    public function index()
    {
        return view('index');
    }

    public function getInfo()
    {
        // Localhost speed is annoying XD
        sleep(1);

        // some basic info.
        $data = [
            [
                'name'  => 'CodeIgniter',
                'version'  => \CodeIgniter\CodeIgniter::CI_VERSION
            ],
            [
                'name'  => 'PHP',
                'version'  => phpversion()
            ],
            [
                'name'  => 'Node',
                'version'  => exec('node -v')
            ],
            [
                'name'  => 'ViteJs',
                'version'  => 'v3'
            ]
        ];

        return $this->respond($data);
    }
}
