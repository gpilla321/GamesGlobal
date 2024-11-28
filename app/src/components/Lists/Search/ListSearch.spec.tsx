import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import ListSearch from "./ListSearch";
import "@testing-library/jest-dom";

const mockData = [
  {
    title: "The Dark Knight",
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    actors: ["Christian Bale", "Heath Ledger", "Gary Oldman"],
    rating: 9.0,
  },
];

describe("ListSearch", () => {
  it("should render the searchbox", async () => {
    const mockOnApplyFilter = vi.fn();
    const mockOnClearFilters = vi.fn();
    const mockOnChangeSearch = vi.fn();
    const mockOnChangeGenre = vi.fn();

    const { getByPlaceholderText } = render(
      <ListSearch
        applyFilter={mockOnApplyFilter}
        clearFilters={mockOnClearFilters}
        onChangeSearch={mockOnChangeSearch}
        onChangeGenre={mockOnChangeGenre}
        search=""
        genre=""
        genres={[]}
      />
    );

    const input = await getByPlaceholderText("Search");

    expect(input).toBeInTheDocument();
  });

  it("should render the genre filter select", async () => {
    const mockOnApplyFilter = vi.fn();
    const mockOnClearFilters = vi.fn();
    const mockOnChangeSearch = vi.fn();
    const mockOnChangeGenre = vi.fn();

    const { getByPlaceholderText } = render(
      <ListSearch
        applyFilter={mockOnApplyFilter}
        clearFilters={mockOnClearFilters}
        onChangeSearch={mockOnChangeSearch}
        onChangeGenre={mockOnChangeGenre}
        search=""
        genre=""
        genres={["Action", "Crime", "Drama"]}
      />
    );

    const input = await getByPlaceholderText("Genre filter");

    expect(input).toBeInTheDocument();
  });

  it("should not render the select when there are no genders available", async () => {
    const mockOnApplyFilter = vi.fn();
    const mockOnClearFilters = vi.fn();
    const mockOnChangeSearch = vi.fn();
    const mockOnChangeGenre = vi.fn();

    const { queryByPlaceholderText } = render(
      <ListSearch
        applyFilter={mockOnApplyFilter}
        clearFilters={mockOnClearFilters}
        onChangeSearch={mockOnChangeSearch}
        onChangeGenre={mockOnChangeGenre}
        search=""
        genre=""
        genres={[]}
      />
    );

    const input = await queryByPlaceholderText("Genre filter");

    expect(input).not.toBeInTheDocument();
  });

  it("should apply filters when click on Apply Filter button", async () => {
    const mockOnApplyFilter = vi.fn();
    const mockOnClearFilters = vi.fn();
    const mockOnChangeSearch = vi.fn();
    const mockOnChangeGenre = vi.fn();

    const { findByTestId } = render(
      <ListSearch
        applyFilter={mockOnApplyFilter}
        clearFilters={mockOnClearFilters}
        onChangeSearch={mockOnChangeSearch}
        onChangeGenre={mockOnChangeGenre}
        search=""
        genre=""
        genres={[]}
      />
    );

    const applyFiltersButton = await findByTestId("apply-filters");
    fireEvent.click(applyFiltersButton);
    
    expect(mockOnApplyFilter).toBeCalled();
  });

  it("should apply filters when click on Apply Filter button", async () => {
    const mockOnApplyFilter = vi.fn();
    const mockOnClearFilters = vi.fn();
    const mockOnChangeSearch = vi.fn();
    const mockOnChangeGenre = vi.fn();

    const { findByTestId } = render(
      <ListSearch
        applyFilter={mockOnApplyFilter}
        clearFilters={mockOnClearFilters}
        onChangeSearch={mockOnChangeSearch}
        onChangeGenre={mockOnChangeGenre}
        search=""
        genre=""
        genres={[]}
      />
    );

    const clearFiltersButton = await findByTestId("clear-filters");
    fireEvent.click(clearFiltersButton);
    
    expect(mockOnClearFilters).toBeCalled();
  });
});
