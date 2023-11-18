<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roads', function (Blueprint $table) {
            $table->id();
            $table->string('provincialRoadId')->nullable(true);
            $table->string('provincialRoad')->nullable(true);
            $table->string('roadlocation')->nullable(true);
            $table->string('roadLength')->nullable(true);
            $table->string('remarks')->nullable(true);

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('roads');
    }
};