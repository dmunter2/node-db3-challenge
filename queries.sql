-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
    -- select ProductName, CategoryName from Product
    --     join Category
    -- on CategoryId = Category.Id


-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
-- - select ShippedDate, ShipVia, CompanyName  from [Order] as o
-- join Shipper as s
-- on o.ShipVia = s.Id
-- where o.OrderDate<'2012-8-9'


-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

-- select p.ProductName, od.quantity
-- from Product as p
-- Join OrderDetail as od
-- on od.OrderId = 10251
-- and od.ProductId = p.id
-- order by p.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
