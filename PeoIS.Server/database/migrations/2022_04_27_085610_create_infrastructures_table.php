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
        Schema::create('infrastructures', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name_of_project')->nullable(true);
            $table->string('location')->nullable(true);
            $table->string('date_of_public_bidding')->nullable(true);
            $table->string('name_of_contractor')->nullable(true);
            $table->string('contrators_authorized_representative')->nullable(true);
            $table->string('position')->nullable(true);
            $table->string('date_of_notice_of_award')->nullable(true);
            $table->string('performance_security_posted')->nullable(true);
            $table->string('issuing_entity')->nullable(true);
            $table->string('policy_no')->nullable(true);
            $table->string('amount_performance_posted')->nullable(true);
            $table->string('date_of_effectivity')->nullable(true);
            $table->string('expiration_date')->nullable(true);
            $table->string('credit_line_from_bank')->nullable(true);
            $table->string('amount_credit_line')->nullable(true);
            $table->string('date_credit_line')->nullable(true);
            $table->string('date_of_notiization_of_contract')->nullable(true);
            $table->string('book_no')->nullable(true);
            $table->string('doc_no')->nullable(true);
            $table->string('series_of')->nullable(true);
            $table->string('date_issuance_of_notice_to_proceed')->nullable(true);
            $table->string('issued_by')->nullable(true);
            $table->string('contract_amount')->nullable(true);
            $table->string('revised_contract_amount')->nullable(true);
            $table->string('contract_duration')->nullable(true);
            $table->string('revised_contract_time')->nullable(true);
            $table->string('time_suspension_extension')->nullable(true);
            $table->string('peo_project_engineer')->nullable(true);
            $table->string('contractors_project_engineer')->nullable(true);
            $table->string('materials_engineer')->nullable(true);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('infrastructures');
    }
};
