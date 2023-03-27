package com.geekypod.ecommerce.repository;

import com.geekypod.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

//Spring data rest automatically expose endpoints for query methods, expose endpoint: /search/<<queryMethodName>>

///search/findByCategoryId?id=1
@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {

    //Page and Pageable provide support for pagination
//    Page is a sublist of list of objects, Has information such as totalElements, totalPages, currentPosition etc.
    //Pageable represent pagination information, such as pageNumber, pagesize, previous, next etc.
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);


//findByNameContaining - Behind the scenes, Spring will execute a query similar to this, select * from Product p where p.name LIKE CONCAT('%', :name, '%')
// spring data REST API URL - http://localhost:8080/api/products/search/findByNameContaining?name=Java
    Page<Product> findByNameContaining(@Param("name") String name, Pageable pageable);
}
