package com.finalproject.realestate.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

import com.finalproject.realestate.dto.PropertySummary;
import java.math.BigDecimal;

@RestController
@RequestMapping("/api/properties") 
public class PropertyController {
   @GetMapping("/summary")
   public PropertySummary getSummary() {
       return new PropertySummary(3, BigDecimal.valueOf(42_800_000), BigDecimal.valueOf(19_875_581), BigDecimal.valueOf(22_924_419), 46.4);
   }
}
