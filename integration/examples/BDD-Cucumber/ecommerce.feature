Feature: End to End Ecommerce Validation

    Application Regression

    Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add items to cart
    And Validate the total prices
    Then Select the country submit and verify thankyou