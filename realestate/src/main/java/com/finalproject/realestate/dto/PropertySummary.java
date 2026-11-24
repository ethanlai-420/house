package com.finalproject.realestate.dto;

import java.math.BigDecimal;

public record PropertySummary(int count, BigDecimal totalPrice, BigDecimal remainingPrincipal, BigDecimal equity, Double ltvPercent) {}
