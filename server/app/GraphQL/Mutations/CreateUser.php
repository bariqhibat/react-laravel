<?php

namespace App\GraphQL\Mutations;
namespace App\Models\User;

class CreateUser
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
        error_log($args);
        
    }
}
