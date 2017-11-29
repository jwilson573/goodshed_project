class UsersController < ApplicationController
    before_action :require_login, except: [:index, :create]
    before_action :auth, except: [:create, :index]
    
    def index
        
    end
    def create
        @user = User.new(user_params)
        @user.save
        if @user.save
            
            flash[:notice] = ["Registered Successfully"]

            session[:user_id] = @user.id 

            return redirect_to "/#{@user.id}/profile"
            
        end
        
        errors = @user.errors.full_messages 

        flash[:errors] = errors

        return redirect_to '/register'

    end

    def show
        @user = User.find(params[:id])
        # errors = @user.errors.full_messages
        # flash[:errors] = errors
        return render "show"

    end

    def update
        @user = User.find(params[:id])

        user = User.update(params[:id], update_user)
            if user.errors
                p user.errors
            end
        return redirect_to "/#{@user.id}/profile"
        

        return redirect_to '/'

    end
    private
        def user_params
            params.require(:user).permit(:first_name, :last_name, :email, :DOB, :password, :password_confirmation)
        end

        def update_user
            params.require(:update_user).permit(:first_name, :last_name, :email, :DOB)
        end

        def auth
            puts "HEY", current_user
            return redirect_to user_path(current_user) unless current_user.id == params[:id].to_i
        end
        

end
