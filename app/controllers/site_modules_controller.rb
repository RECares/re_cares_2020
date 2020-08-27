class SiteModulesController < ApplicationController
  before_action :set_site_module, only: [:show, :edit, :update, :destroy]

  # GET /site_modules
  # GET /site_modules.json
  def index
    @site_modules = SiteModule.all
  end

  # GET /site_modules/1
  # GET /site_modules/1.json
  def show
  end

  # GET /site_modules/new
  def new
    @site_module = SiteModule.new
  end

  # GET /site_modules/1/edit
  def edit
  end

  # POST /site_modules
  # POST /site_modules.json
  def create
    @site_module = SiteModule.new(site_module_params)

    respond_to do |format|
      if @site_module.save
        format.html { redirect_to @site_module, notice: 'Site module was successfully created.' }
        format.json { render :show, status: :created, location: @site_module }
      else
        format.html { render :new }
        format.json { render json: @site_module.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /site_modules/1
  # PATCH/PUT /site_modules/1.json
  def update
    respond_to do |format|
      if @site_module.update(site_module_params)
        format.html { redirect_to @site_module, notice: 'Site module was successfully updated.' }
        format.json { render :show, status: :ok, location: @site_module }
      else
        format.html { render :edit }
        format.json { render json: @site_module.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /site_modules/1
  # DELETE /site_modules/1.json
  def destroy
    @site_module.destroy
    respond_to do |format|
      format.html { redirect_to site_modules_url, notice: 'Site module was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_site_module
      @site_module = SiteModule.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def site_module_params
      params.require(:site_module).permit(:name)
    end
end
