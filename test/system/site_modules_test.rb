require "application_system_test_case"

class SiteModulesTest < ApplicationSystemTestCase
  setup do
    @site_module = site_modules(:one)
  end

  test "visiting the index" do
    visit site_modules_url
    assert_selector "h1", text: "Site Modules"
  end

  test "creating a Site module" do
    visit site_modules_url
    click_on "New Site Module"

    fill_in "Name", with: @site_module.name
    click_on "Create Site module"

    assert_text "Site module was successfully created"
    click_on "Back"
  end

  test "updating a Site module" do
    visit site_modules_url
    click_on "Edit", match: :first

    fill_in "Name", with: @site_module.name
    click_on "Update Site module"

    assert_text "Site module was successfully updated"
    click_on "Back"
  end

  test "destroying a Site module" do
    visit site_modules_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Site module was successfully destroyed"
  end
end
