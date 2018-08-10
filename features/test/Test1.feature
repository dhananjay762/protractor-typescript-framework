Feature: Test1

@tag1
Scenario Outline: test scenario

Given Launch url
When  Enter first number as "5"
And   Enter second number as "8"
And   Select operation "+"
Then  Click on go
And   Verify the result is "13"

Examples:
| Header 1 | Header 2 | Header 3 |
| Value 1  | Value 2  | Value 3  |