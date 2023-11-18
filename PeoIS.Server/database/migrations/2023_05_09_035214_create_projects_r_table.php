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
        Schema::create('projectsR', function (Blueprint $table) {
            $table->id();
            $table->string('aip_reference_code')->nullable();
            $table->string('project_status')->nullable();
            $table->string('project_name')->nullable();
            $table->string('location')->nullable();
            $table->string('barangay')->nullable();
            $table->string('municipality')->nullable();
            $table->string('implementing_office')->nullable();
            $table->string('starting_date')->nullable();
            $table->string('completion_date')->nullable();
            $table->string('expected_output')->nullable();
            $table->string('funding_source')->nullable();
            $table->string('personal_services')->nullable();
            $table->string('mooe')->nullable();
            $table->string('capital_outlay')->nullable();
            $table->string('total')->nullable();
            $table->string('cca')->nullable();
            $table->string('ccm')->nullable();
            $table->string('cc_typology_code')->nullable();
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
        Schema::dropIfExists('projectsR');
    }
};