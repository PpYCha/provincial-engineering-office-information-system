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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('aip_reference_code')->nullable(true);
            $table->string('project_status')->nullable(true);
            $table->string('project_name')->nullable(true);
            $table->string('location')->nullable(true);
            $table->string('barangay')->nullable(true);
            $table->string('municipality')->nullable(true);
            $table->string('implementing_office')->nullable(true);
            $table->string('starting_date')->nullable(true);
            $table->string('completion_date')->nullable(true);
            $table->string('expected_output')->nullable(true);
            $table->string('funding_source')->nullable(true);
            $table->string('personal_services')->nullable(true);
            $table->string('mooe')->nullable(true);
            $table->string('capital_outlay')->nullable(true);
            $table->string('total')->nullable(true);
            $table->string('cca')->nullable(true);
            $table->string('ccm')->nullable(true);
            $table->string('cc_typology_code')->nullable(true);

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
        Schema::dropIfExists('projects');
    }
};
