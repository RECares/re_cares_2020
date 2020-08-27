require 'test_helper'

class SiteModulesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @site_module = site_modules(:one)
  end

  test "should get index" do
    get site_modules_url
    assert_response :success
  end

  test "should get new" do
    get new_site_module_url
    assert_response :success
  end

  test "should create site_module" do
    assert_difference('SiteModule.count') do
      post site_modules_url, params: { site_module: { name: @site_module.name } }
    end

    assert_redirected_to site_module_url(SiteModule.last)
  end

  test "should show site_module" do
    get site_module_url(@site_module)
    assert_response :success
  end

  test "should get edit" do
    get edit_site_module_url(@site_module)
    assert_response :success
  end

  test "should update site_module" do
    patch site_module_url(@site_module), params: { site_module: { name: @site_module.name } }
    assert_redirected_to site_module_url(@site_module)
  end

  test "should destroy site_module" do
    assert_difference('SiteModule.count', -1) do
      delete site_module_url(@site_module)
    end

    assert_redirected_to site_modules_url
  end
end
