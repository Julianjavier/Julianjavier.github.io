<?
  header('Content-type: application/json');
  $response_array['status'] = 'success';
  $user="root";
  $pass="root";
  $Store_Type_Number = $_GET["Store_Type_Number"];
  $SCV_ID = $_GET["SCV_ID"];
  $User_Number = $_GET["User_Number"];
  $dbh = new PDO('mysql:host=127.0.0.1;dbname=PromoRetail;port=8889', $user, $pass);
  $stmt = $dbh->prepare("SELECT * FROM distribution_opt
                          JOIN Products USING(Product_Number)
                          LEFT JOIN product_company_numbers USING(Product_Number)
                          LEFT JOIN (
                          SELECT a.* FROM product_goals_storetype as a
                          LEFT JOIN product_goals_storetype as b
                          ON a.Effective_Date < b.Effective_Date and a.Product_Number = b.Product_Number and a.Store_Type_Number = b.Store_Type_Number
                          WHERE b.Effective_Date IS NULL
                          ) AS pgst USING(Product_Number, Store_Type_Number)
                          WHERE Store_Type_Number = $Store_Type_Number
                          AND SCV_ID = $SCV_ID
                          AND Product_Number IN (
                          SELECT Product_Number FROM product_privileges Where User_Number = $User_Number
                          )
                          AND Company_Number = (SELECT Company_Number FROM Users WHere User_Number = $User_Number LIMIT 1)
                          GROUP BY Product_Number, Store_Type_Number, SCV_ID;");

  $stmt->execute();
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($result);
?>
